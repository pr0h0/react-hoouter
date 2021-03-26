export const shouldRender = ({ path, exact, activeRoute }) => {
  if (
    !path ||
    (exact && activeRoute === path) ||
    (!exact && activeRoute?.startsWith(path))
  )
    return true;
  return false;
};
