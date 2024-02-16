import { Redirect, Route } from 'react-router-dom';
import { hasAnyRoles, isAuthenticated } from 'util/auth';
import { Role } from 'util/role';


type Props = {
  children: React.ReactNode;
  path: string;
  roles?: Role[];
};

const PrivateRoute = ({ children, path, roles = []}: Props) => {
  return (
    <Route
      path={path}
      render={({ location }) =>
        !isAuthenticated() ? (
          <Redirect
            to={{
              pathname: '/admin/auth/login',
              state: { from: location },
            }}
          />
        ) : !hasAnyRoles(roles) ? (
          <Redirect to="/admin/products" />
        ) : (
          <>{children}</>
        )
      }
    />
  );
};

export default PrivateRoute;
