import constains from '../constains/index';

interface RequestParams {
  method: string;
  data?: unknown;
}

export class Api {
  private url = constains.URL;

  protected async request(path: string, params: RequestParams, query?: string) {
    query = query ? '?' + query : '';
    const res = await fetch(this.url + path + query, {
      method: params.method,
      body: params.data ? this.stringify(params.data) : null,
      headers: {
        'Content-type': 'application/json',
      },
    });
    try {
      if (res.status !== 200) throw new Error(await res.json());
      const json = await res.json();
      return json;
    } catch (error) {
      alert(error);
      return Promise.reject(error);
    }
  }

  private stringify(data: unknown): string {
    return JSON.stringify(data);
  }
}
