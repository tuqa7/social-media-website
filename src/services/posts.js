const Fetchposts = () => {
  return fetch("https://tuqa7.free.beeceptor.com/posts", { method: 'GET' })
    .then((respose) => {
      return respose.json();
    })
    .catch((err) => {
      console.log(err.toString());
    });
};

export { Fetchposts };
