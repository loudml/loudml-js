import qs from 'qs';

class LoudmlAPIClient {
  constructor(loudml_url, opts) {
    this.client = null;
    this.authOpt = null;
  }

  checkSession(options, cb) {
    return this.client.checkSession(options, cb);
  }
}

export default LoudmlAPIClient;
