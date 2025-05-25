# Modern Portfolio - V2

This portfolio is crafted using [Next.js](https://nextjs.org/)

## Technologies Used

- [Nextjs.js](https://nextjs.org/) : A React-based, open-source framework for building efficient and scalable web applications.
- [Tailwind CSS](https://tailwindcss.com) : A utility-first CSS framework for rapid UI development.
- [TypeScript](https://www.typescriptlang.org): A typed superset of JavaScript that provides enhanced tooling and developer productivity.
- [Framer motion](https://www.framer.com/motion/): A React animation library that brings motion to your user interfaces.
- [Nodemailer](https://nodemailer.com/): A Node.js library facilitating easy email integration with features like attachment handling, HTML content, and support for various email services.

## Setup Nodemailer

### Create Nodemailer User and Password

1. Go to your Google Mail app or any other Google App.
2. Click on your `Profile`
3. Click on `Manage your Google Account`
4. Go to `Security`
5. Under `How you sign in Google` go to `2-Step Verification`
6. Under `2-Step Verification` go to `App passwords`
7. Create an app (e.g., portfolio-nodemailer), and copy the generated password securely. Use it as the value for the `NODEMAILER_PASS` variable and your email as the value for `NODEMAILER_USER` variable in `.env` file. [Note: Passwords are not visible once closed; if forgotten, delete the old app and create a new one.]

### Seo best practices

1. The project automatically generates sitemap.xml and robots.txt files within the public folder by leveraging the project's file structure. This process is initiated through the scripts located at src/scripts/generateSitemap.mjs, executed either after the project is built or by running the command `pnpm/npm/yarn sitemap`.

2. It's important to note that [dynamic routes](https://nextjs.org/docs/pages/building-your-application/routing/dynamic-routes), identified by file or folder names in square brackets (e.g., [segmentName], [id], or [slug]), are excluded from the sitemap.xml.

3. Update google site verification code with your own inside `/src/data/siteMetaData.mjs`. Can be created for free using your google email id at <https://search.google.com/search-console/welcome>

## Development setup (If anyone want to use)

### Step 1: Clone the repository
```bash 
git clone https://github.com/kader009/modern-portfolio.git
```

### Step 2: Navigate into the project directory
```bash 
cd modern-portfolio
```

### Step 3 - Install dependencies

```bash
pnpm/npm/yarn install
```

### Step 4 - Run the development server

```bash
pnpm/yarn dev
```

For npm user
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the portfolio.

## Live site image
![My Website Banner](https://i.ibb.co/FLzDtgqz/portfolio.webp)
