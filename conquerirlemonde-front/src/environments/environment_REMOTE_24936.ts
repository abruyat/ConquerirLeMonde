// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.

export const environment = {
  production: false,
  wsPlanetsKubernetes: 'ws://localhost:8080/ws/planets/kubernetes',
  wsPlanetsFleet: 'ws://localhost:8080/ws/planets/fleet',
  newTrooperUrl: 'ws://localhost:8080/ws/trooper',
  dropTrooperUrl: 'http://localhost:8080/trooper/die'
};