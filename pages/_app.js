// import "../sass/style.module.scss";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps}/>
      <style jsx global>{`
        * {
          box-sizing: border-box;
          margin: 0;
        }
        body {
          font-family: 'Lexend Deca', sans-serif;
          margin: 0 auto; 
          min-width: 325px;
        }
        a {
          text-decoration: none;
        }
        button {
          cursor: pointer;
        }
      `}</style>
    </>
  )
}