// This file is created by egg-ts-helper@1.25.6
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportHome from '../../../app/controller/home';
import ExportV1Users from '../../../app/controller/v1/users';

declare module 'egg' {
  interface IController {
    home: ExportHome;
    v1: {
      users: ExportV1Users;
    }
  }
}
