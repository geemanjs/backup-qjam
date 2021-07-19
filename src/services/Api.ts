export class Api {
  static async getFromNonBase(uri: string, opts?: any) {
    const res = await fetch(uri, opts);
    if (res.ok) {
      return Promise.resolve(res.json());
    } else {
      if (res.status === 0) {
        return Promise.reject(
          new Error("Unable to contact server, check your network")
        );
      }
      const json = await res.text();
      try {
        const error = JSON.parse(json);
        return Promise.reject(new Error(`Server error: ${error.message}`));
      } catch (err) {
        return Promise.reject(new Error("Unknown server error"));
      }
    }
  }

  static get(uri: string, opts?: any): Promise<any> {
    return this.getFromNonBase(`${process.env.NEXT_PUBLIC_API}${uri}`, opts);
  }
}
