# info reproduction steps

| Project             | command                                                                    |
| ------------------- | -------------------------------------------------------------------------- |
| Update Builder Base | `docker build . -f gitlab-ci/builder-base/Dockerfile -t tnem:builder-base` |
| app2                | `docker compose up --build app2`                                           |

## expected output

```log
Attaching to app2_container
app2_container  | /usr/src/app/node_modules/@nestia/core/lib/decorators/internal/TransformError.js:8
app2_container  |     return new Error("Error on nestia.core.".concat(method, "(): no transform has been configured. Run \"npx typia setup\" command."));
app2_container  |            ^
app2_container  | 
app2_container  | Error: Error on nestia.core.TypedRoute.Get(): no transform has been configured. Run "npx typia setup" command.
app2_container  |     at TransformError (/usr/src/app/node_modules/@nestia/core/lib/decorators/internal/TransformError.js:8:12)
app2_container  |     at /usr/src/app/node_modules/@nestia/core/lib/decorators/internal/get_path_and_stringify.js:29:55
app2_container  |     at /usr/src/app/node_modules/@nestia/core/lib/decorators/internal/get_path_and_stringify.js:22:82
app2_container  |     at Object.route [as Get] (/usr/src/app/node_modules/@nestia/core/lib/decorators/TypedRoute.js:106:112)
app2_container  |     at file:///usr/src/app/dist/apps/app2/app2.controller.js:28:16
app2_container  |     at ModuleJob.run (node:internal/modules/esm/module_job:194:25)
app2_container  | 
app2_container  | Node.js v18.16.1
app2_container exited with code 1
```
