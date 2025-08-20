export default {
  fetch: handleRequest,
};

async function handleRequest(req, env) {
  const url = new URL(req.url);
  const path = url.pathname;

  if (path !== "") {
    const target = url.toString().replace(path, "");
    return Response.redirect(target, 301);
  }

  return env.ASSETS.fetch(req);
}
