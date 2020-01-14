// This file is created by egg-ts-helper@1.25.6
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportUrl from '../../../app/model/url';
import ExportUser from '../../../app/model/user';

declare module 'egg' {
  interface IModel {
    Url: ReturnType<typeof ExportUrl>;
    User: ReturnType<typeof ExportUser>;
  }
}
