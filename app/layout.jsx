import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import "@/styles/globals.css";

export const metaData = {
  title: "PromptAi",
  description: "Get prompts help",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className="gradient" />
        </div>

        <main className="app">
          <Nav />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
