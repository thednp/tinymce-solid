const Footer = () => {
  return (
    <footer class="container mx-auto flex flex-col lg:flex-row justify-between py-5 text-sm">
      <p>
        Visit{" "}
        <a href="https://start.solidjs.com" target="_blank">
          start.solidjs.com
        </a>{" "}
        to learn how to build SolidStart apps.
      </p>
      <p>
        <a class="font-weight-900 font-stretch-125" href="https://github.com/thednp" target="_blank">
          thednp
        </a>{" "}
        © {new Date().getFullYear()}
      </p>
    </footer>
  );
};

export default Footer;
