# Important

If cloning this repo, make sure to change the git remote to your new repo with the command `git remote set-url` I.e:

`git remote set-url origin git@github.com:NEUStudio/brodies-checklist-app.git`

## The neu create-react-app starter

It defines the **file structure**, **file & component naming conventions**, **preferred export methods** and **required consts** for React apps made at neu.

### Component structure:

```
/component-name
    /ComponentName.js
    /ComponentName.stories.js
```

### Packages

#### It comes preinstalled with:

- Redux, Redux Dev Tools & Thunk
- Router & History
- Normalized CSS
- Styled Components
- Storybook
- React Swiper Id (carousels)
- Google Analytics (handled by the `Analytics.js` component within `App.js` - make sure to pass in a Google Analytics ID)

#### In progress:

- Jest / Enzyme (currently throwing issues with Babel)

#### To be added:

- .env Variables across dev/production environments

### Components:

- Carousel
  - Dots
  - Carousel Item
  - Progress bar
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
- Other
  - Welcome message

### Utils:

- Analytics
- Image preloader
