import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import {
  Grid,
  Container,
  Typography,
  Avatar,
  SwipeableDrawer,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListSubheader,
  ListItemText,
  Box,
  useTheme
} from '@mui/material';

import ProfileCover from './ProfileCover';
import Footer from '../../../components/Footer';
import LanguagesOverview from './LanguagesOverview';
import { Link } from 'react-router-dom';
// import Feed from './Feed';
// import PopularTags from './PopularTags';
// import MyCards from './MyCards';
// import Addresses from './Addresses';

const urlsList = [
  {
    title: 'Home Page',
    url: '/',
    initials: 'HP'
  },
  {
    title: 'About',
    url: '/about',
    initials: '?'
  },
  {
    title: 'Portfolio',
    url: '/portfolio',
    initials: 'P'
  },
  {
    title: 'My CV',
    url: '/cv',
    initials: 'CV'
  },
  {
    title: 'All Contact',
    url: '/contact',
    initials: 'AC'
  }
];

const urlsCustomersList = [
  {
    title: 'Customer Area',
    url: '/ca',
    initials: 'CA'
  },
  {
    title: "Rafael's Panel",
    url: '/panel',
    initials: 'RP'
  }
];

function LandingPage() {
  const user = {
    savedCards: 7,
    name: 'Rafael Guimarães',
    email: 'contato@rafaelgcs.com',
    coverImg: '/static/images/placeholders/covers/3.jpg',
    avatar: '/static/images/avatars/default.jpg',
    subtitle: '@rafaelgcs',
    description:
      'Currently studying BI in Science and Technology at UFBA (Federal University of Bahia) being Software Developer (Computer Technician) at SENAI Cimatec and Web Designer at SAGA. \nExperienced Software Developer adept in all stages of advanced web development with focous in front-end. Knowledgeable in user interface, testing, and debugging processes. Bringing forth expertise in design, installation, testing and maintenance of systems. Equipped with a diverse and promising skill-set. Proficient in an assortment of technologies, including JavaScript, ASP.NET, C#, React JS, React Native, Flutter, and others. Able to effectively self-manage during independent projects, as well as collaborate in a team setting.',
    jobtitle: 'Software Developer',
    location: 'Salvador, BA'
  };
  const theme = useTheme();
  const [openDrawer, setOpenDrawer] = useState(false);
  const toggleDrawer = () => {
    setOpenDrawer(!openDrawer);
  };

  return (
    <>
      <Helmet>
        <title>Rafael Guimarães - Software Developer</title>
      </Helmet>
      <Container sx={{ mt: 3 }} maxWidth="lg">
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="stretch"
          spacing={3}
        >
          <Grid item xs={12} md={8}>
            <ProfileCover user={user} toggleDrawer={toggleDrawer} />
          </Grid>
          <Grid item xs={12} md={4}>
            <LanguagesOverview />
          </Grid>
          {/* <Grid item xs={12} md={8}>
            <Feed />
          </Grid>
          <Grid item xs={12} md={4}>
            <PopularTags />
          </Grid>
          <Grid item xs={12} md={7}>
            <MyCards />
          </Grid>
          <Grid item xs={12} md={5}>
            <Addresses />
          </Grid> */}
        </Grid>
        <SwipeableDrawer
          open={openDrawer}
          onClose={toggleDrawer}
          onOpen={toggleDrawer}
        >
          <Box
            sx={{
              width: 250
            }}
            role="presentation"
            onClick={toggleDrawer}
            onKeyDown={toggleDrawer}
          >
            <ListSubheader>
              <Typography sx={{ py: 1.5 }} variant="h4" color="text.primary">
                Menu
              </Typography>
            </ListSubheader>
            <Divider />
            <List>
              {urlsList.map((s, index) => (
                <Link
                  key={`url_list_drawer-${index}`}
                  to={s.url}
                  style={{ textDecoration: 'none' }}
                >
                  <ListItem button>
                    <ListItemAvatar>
                      <Avatar
                        sx={{
                          width: 38,
                          height: 38,
                          background: `${theme.colors.info.main}`,
                          color: `${theme.palette.info.contrastText}`
                        }}
                      >
                        {s.title[0]}
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primaryTypographyProps={{
                        variant: 'h5',
                        color: `${theme.colors.alpha.black[100]}`
                      }}
                      primary={s.title}
                    />
                  </ListItem>
                </Link>
              ))}
            </List>
            <Divider />
            <ListSubheader>
              <Typography sx={{ py: 1.5 }} variant="h4" color="text.primary">
                For Customers
              </Typography>
            </ListSubheader>
            <Divider />
            {urlsCustomersList.map((s, index) => (
              <Link
                key={`url_list_drawer-${index}`}
                to={s.url}
                style={{ textDecoration: 'none' }}
              >
                <ListItem button>
                  <ListItemAvatar>
                    <Avatar
                      sx={{
                        width: 38,
                        height: 38,
                        background: `${theme.colors.info.main}`,
                        color: `${theme.palette.info.contrastText}`
                      }}
                    >
                      {s.title[0]}
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primaryTypographyProps={{
                      variant: 'h5',
                      color: `${theme.colors.alpha.black[100]}`
                    }}
                    primary={s.title}
                  />
                </ListItem>
              </Link>
            ))}
            {/* <List>
              {urlsList.map((t) => {
                return (
                  // <React.Fragment key={`${t}__-urlList`}>
                  <ListItem
                    sx={{
                      color: `${theme.colors.primary.main}`,
                      '&:hover': { color: `${theme.colors.primary.dark}` }
                    }}
                    button
                    key={`${t}__-urlList`}
                  >
                    <ListItemText primary={t} />
                  </ListItem>
                );
              })}
            </List> */}
          </Box>
        </SwipeableDrawer>
      </Container>
      <Footer />
    </>
  );
}

export default LandingPage;
