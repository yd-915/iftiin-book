import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: "Iftiin-Book: Monetize your literary works",
    shortTitle: "Mash Lightning Book",
    author: "IFTIIN Technologies",
    description:
      "With Iftiin-Book, you can monetize your literary works, whether it be books, essays or research papers with Bitcoin through the lightning network. Leveraging the Mash SDK, Iftiin-Book makes it easy for potential readers to 'boost' you sats in support of your work or to pay for full-access. Because it's Bitcoin, all funds goes to you and through Lightning, faster than ever.",
    siteUrl: "https://mashlightningbookstarter.gatsbyjs.io/",
    social: {
      twitter: "getmash",
      email: "join@getmash.com",
    },
    book: {
      amazon: "https://someamazonbooklink.com",
      chapters: [
        {
          number: 1,
          title: "Iftiin is great.",
        },
        {
          number: 2,
          title: "Why is Iftiin great?",
        },
        {
          number: 3,
          title: "Because why not?",
        },
      ],
    },
    mash: {
      earnerID: "3ca1325e-eb19-49f8-bad2-6d844b85b394",
      resourceID: "d2f6bcce-daf0-4c54-b95d-4982aa7b7fa6",
      handle: "mashearner",
      walletPosition: {
        desktop: {
          floatLocation: "bottom-right",
          shiftUp: 0,
          shiftRight: 0,
          shiftLeft: 0,
        },
        mobile: {
          floatLocation: "bottom-right",
        },
      },
      boosts: {
        icon: "lightning",
        variant: "dark",
        layoutMode: "float",
        floatLocationDesktop: "bottom-center",
        floatLocationMobile: "bottom-left",
      },
    },
  },
  plugins: [
    // Adds drop-in support for making a Gatsby site work offline and more resistant to bad network connections.
    "gatsby-plugin-offline",

    // Provides drop-in support for server rendering data added with React Helmet
    "gatsby-plugin-react-helmet",

    // Provides drop-in support for PostCSS
    "gatsby-plugin-postcss",

    // Adds web app manifest support.
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Lorem Ipsum",
        short_name: "Lorem",
        start_url: "/",
        background_color: "#3c3211",
        display: "minimal-ui",
        icon: "src/images/book.png",
      },
    },
    // Handles producing images in multiple sizes and formats to keep site performance high
    "gatsby-plugin-image",

    // Sources book data into gatsby application from local filesystem.
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/content/book`,
        name: "book",
      },
    },

    // Sources image data into gatsby application from local filesystem.
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/images`,
        name: "images",
      },
    },

    // Parses Markdown files using remark
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            // Processes images in markdown so they can be used in production build.
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 630,
            },
          },
          {
            // Wrap iframes of objects within markdown files in responsive elastic container. Ensures
            // the iframe or object will scale proportionally.
            resolve: "gatsby-remark-responsive-iframe",
            options: {
              wrapperStyle: "margin-bottom: 1.0725rem",
            },
          },

          // Adds syntax highlighting to code blocks in markdown files
          "gatsby-remark-prismjs",

          // Copies local files linked to/from Markdown (.md|.markdown) files to the root directory (i.e., public folder).
          "gatsby-remark-copy-linked-files",

          // Replaces “dumb” punctuation marks with “smart” punctuation marks using the retext-smartypants plugin
          "gatsby-remark-smartypants",
        ],
      },
    },

    // Creates ImageSharp nodes from image types that are supported by the Sharp image processing library and provides fields in
    // their GraphQL types for processing your images in a variety of ways including resizing, cropping, and creating responsive images.
    "gatsby-transformer-sharp",

    // Exposes several image processing functions built on the Sharp image processing library. This is a low-level
    // helper plugin generally used by other Gatsby plugins.
    "gatsby-plugin-sharp",

    // Allows adding a custom defined slug field to markdown
    "gatsby-plugin-slug",
  ],
};

export default config;
