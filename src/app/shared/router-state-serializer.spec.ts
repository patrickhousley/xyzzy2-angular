import { RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { SimplifiedRouterStateSerializer } from './router-state-serializer';

describe('SimplifiedRouterStateSerializer', () => {
  it('should return object with the url', () => {
    const service = new SimplifiedRouterStateSerializer();
    const rootSnapshot = {
      url: [],
      params: {},
      fragment: '',
      data: {},
      outlet: null,
      component: null,
      routeConfig: null,
      root: null,
      parent: null,
      firstChild: null,
      children: [],
      pathFromRoot: null,
      paramMap: null,
      queryParamMap: null,
      queryParams: {
        test: 'value'
      }
    } as ActivatedRouteSnapshot;
    const snapshot = {
      url: 'testRoute',
      root: rootSnapshot
    } as RouterStateSnapshot;
    const { url } = service.serialize(snapshot);
    expect(url).toBe('testRoute');
  });

  it('should return object with the queryParams', () => {
    const service = new SimplifiedRouterStateSerializer();
    const rootSnapshot = {
      url: [],
      params: {},
      fragment: '',
      data: {},
      outlet: null,
      component: null,
      routeConfig: null,
      root: null,
      parent: null,
      firstChild: null,
      children: [],
      pathFromRoot: null,
      paramMap: null,
      queryParamMap: null,
      queryParams: {
        test: 'value'
      }
    } as ActivatedRouteSnapshot;
    const snapshot = {
      url: 'testRoute',
      root: rootSnapshot
    } as RouterStateSnapshot;
    const { queryParams } = service.serialize(snapshot);
    expect(queryParams).toEqual(rootSnapshot.queryParams);
  });
});
