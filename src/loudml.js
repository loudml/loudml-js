import Core from './core';

export default class Loudml extends Core {
  constructor(host_url) {
    super(host_url);
  }
}

// telemetry
Loudml.version = __VERSION__;
