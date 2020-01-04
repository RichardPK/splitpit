# Important

If cloning this repo, make sure to change the git remote to your new repo with the command `git remote set-url` I.e:

`git remote set-url origin git@github.com:username/your-app.git`

## RPK's create-react-app starter

It defines the **file structure**, **file & component naming conventions**, **preferred export methods** and **required consts** for React apps.

### Component structure:

```
/component-name
    /ComponentName.js
```

### Packages

#### It comes preinstalled with:

- Redux, Redux Dev Tools & Thunk
- Router & History
- Normalized CSS
- Styled Components
- Google Analytics (handled by the `Analytics.js` component within `App.js` - make sure to pass in a Google Analytics ID)

#### To be added:

- .env Variables across dev/production environments
- Image preloader needs testing

### Components:

- CTAs
  - Primary
- Image
- Form
  - Input
- Text Elements
  - Body
  - Body small
  - Caption
  - Cta
  - Error
  - Heading-1
  - Heading-2
  - Heading-3
  - Heading-4
  - Heading-5
  - index

### Utils:

- Analytics
- Image preloader
