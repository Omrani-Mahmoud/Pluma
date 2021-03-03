import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import {RecoilRoot,atom,selector,useRecoilState,useRecoilValue,} from "recoil";
import {userState,workSpaceState,languagesState} from '../../Atoms/Atoms'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import logo from '../../Assets/img/pluma logo/Logo.svg'
import '../../Assets/Css/TopBar.css'
import { motion } from 'framer-motion';
import Langue from '../Language Items/Langue';
import WorkspaceItem from '../Workspaces items/WorkspaceItem';
import {activeWorkspace} from '../../Selectors/WorkspaceSelector'
import CustomAccording from '../../Components/SideBar/CustomAccording'
import ProductForm from '../Product Section/ProductForm';
import { Switch, Route, Link,useLocation } from 'react-router-dom';
import Empty from '../Empty';
import { Grid } from '@material-ui/core';
import Result from '../Results/Result';
import FavoriteContainer from '../../Views/Favorite/FavoriteContainer';
import WorkspacesContainer from '../../Views/Workspaces/WorkspacesContainer';
import ProfileContainer from '../../Views/Profile/ProfileContainer';
import EmailForm from '../Email Section/Email Headlines/EmailForm';
import FacebookHeadLinesForm from '../Social ADS/Facebook Headlines/FacebookHeadLinesForm';
import FacebookLinkDescForm from '../Social ADS/Facebook Link Desc/FacebookLinkDescForm';
import FacebookPrimaryTextForm from '../Social ADS/Facebook Primary Text/FacebookPrimaryTextForm';
import GoogleDescriptionForm from '../Social ADS/Google Description/GoogleDescriptionForm';
import GoogleHeadlinesForm from '../Social ADS/Google Headlines/GoogleHeadlinesForm';
import AidaForm from '../SalesCopy/AIDA/AidaForm';
import BABForm from '../SalesCopy/Before After bridge/BABForm';
import EmoAnglesForm from '../SalesCopy/Emotional angles/EmoAnglesForm';
import FABForm from '../SalesCopy/Feature advantage benefit/FABForm';
import FTBForm from '../SalesCopy/Feature to benefits/FTBForm';
import FunctionalBenefitForm from '../SalesCopy/Functional benefits/FunctionalBenefitForm';
import MarketingAnglesForm from '../SalesCopy/Marketing angles/MarketingAnglesForm';
import PASForm from '../SalesCopy/Pain agitate solution/PASForm';
import PPPForm from '../SalesCopy/Problem promise proof/PPPForm';
import BlogIntroForm from '../WebsitesCopy/BlogIntro/BlogIntroForm';
import ListiclesForm from '../WebsitesCopy/Listicles/ListiclesForm';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    paddingTop:'5px',
    height:'100vh'
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  logo_large: {
    width: '210px',
    padding:'15px',
    height: theme.spacing(10),
    marginLeft:'18px'

  
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: '100%',
      marginLeft: drawerWidth,
      background:'white',
      height:'85px',
        boxShadow:'0px 3px 5px 0px rgba(234 ,235, 239, .7)',
    //   borderBottom:'1px solid #C4C4C4'
    zIndex:9999
  
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },

  drawerPaper: {
    width: drawerWidth,

  
  },
  drawerPaperWeb: {
    width: drawerWidth,
    marginTop:'85px',
    paddingTop:'75px',
    border:'none',
    overflowY:'auto',
    maxHeight:'88vh'
  },

  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    background:'rgb(245,246,250)',
    paddingTop:'84px',
    flexDirection:'row',
    display:"flex"

  },
}));

function CustomTopBar(props) {

  let location=useLocation();
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const currentWorkspace= useRecoilValue(activeWorkspace);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isMenuOpen, setisMenuOpen] = React.useState(null)
  const [isProfileMenu, setisProfileMenuOpen] = React.useState(null)
  const [isInputMenuOpen, setisInputMenuOpen] = React.useState(null)
  const [isOutputMenuOpen, setisOutputMenuOpen] = React.useState(null)

  const [user,setUser] = useRecoilState(userState);
  const [workSpace,setWorkSpace] = useRecoilState(workSpaceState);
  const [languages,setLanguages] = useRecoilState(languagesState);


  const [activeLanguages,setActiveLanguages] = React.useState({
      input:'English',
      output:'English'
  });


  console.log(location.pathname)

  const handleWorkeSpaces = (v)=>{
      let wrong = [];
       workSpace.map(elem=>{
          if(elem.name!==v){
                wrong.push(workSpace.indexOf(elem))
          }
      })
    const elementsIndex =workSpace.findIndex(element => element.name == v );
    let newArray = [...workSpace];
    newArray[elementsIndex] = {...newArray[elementsIndex], isActive: true};
    wrong.map(i=>{
        newArray[i] = {...newArray[i], isActive: false};
    })
    setWorkSpace(newArray)
    setisMenuOpen(null);
  }


  const handleInputActiveLanguage = (v)=>{
        setActiveLanguages({...activeLanguages,input:v})
  }

  const handleOutputActiveLanguage = (v)=>{
    setActiveLanguages({...activeLanguages,output:v})
}


  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleMenuOpen = (event)=>{
    setisMenuOpen(event.currentTarget)
}
const handleMenuClose = ()=>{
// auth.logout()
    setisMenuOpen(null)
}

const handleInputMenuOpen = (event)=>{
    setisInputMenuOpen(event.currentTarget)
}
const handleInputMenuClose = ()=>{
// auth.logout()
    setisInputMenuOpen(null)
}

const handleOutputMenuOpen = (event)=>{
    setisOutputMenuOpen(event.currentTarget)
}
const handleOutputMenuClose = ()=>{
// auth.logout()
    setisOutputMenuOpen(null)
}

const handleProfileMenuOpen = (event)=>{
    setisProfileMenuOpen(event.currentTarget)
}
const handleProfileMenuClose = ()=>{
// auth.logout()
setisProfileMenuOpen(null)
}

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );


  const web_drawer = (
    <div>

      <div className={classes.toolbar_web} />

      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem button key={text} onClick={()=>console.log('aaaa')}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );


  const container = window !== undefined ? () => window().document.body : undefined;

  const _getuserName = ()=>{
      let name = user.fullname.split(' ');
      return `${name[0]}.${name[1][0]}`
  }
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="absolute" className={classes.appBar}>
        <Toolbar style={{paddingLeft:'0px',paddingRight:'0px'}} >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <div style={{width:'100%',height:'85px',display:'flex',justifyContent:'flex-end'}}>
            <section style={{width:'18%',flexDirection:'row',display:'flex',justifyContent:'flex-start',alignItems:'center'}}>
                      <Avatar variant="square" src={logo} className={classes.logo_large} />

            </section>
            <section style={{width:'12%',flexDirection:'row',display:'flex',justifyContent:'flex-start',alignItems:'center'}}>
                    

            </section>
          <section style={{width:'15%',flexDirection:'row',display:'flex',justifyContent:'center',alignItems:'center',color:'black',borderLeft:'2px solid rgb(246,246,246)'}}>
                <span style={{color:isInputMenuOpen?'#6A7BFF':'#202020',display:'flex',alignItems:'center',cursor:'pointer'}} onClick={handleInputMenuOpen}>Input Language
                {
                    isInputMenuOpen?
                    <ExpandLessIcon style={{marginLeft:'10px'}}/>
                    :               
                    <ExpandMoreIcon style={{marginLeft:'10px'}}/>
                }
                </span>

                <Menu
                        // anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                        id={'profile_menu'}
                        keepMounted
                        anchorEl={isInputMenuOpen}
                        open={Boolean(isInputMenuOpen)}
                        onClose={handleInputMenuClose}
                        style={{marginTop:'60px',textAlign:'center'}}
                        >
                            {
                                languages.map((elem,index)=>{
                                   return  <Langue lang={elem} activeLangue={activeLanguages.input} handler={handleInputActiveLanguage} />

                                   
                                })
                            }
                       
                        {/* <Divider variant="middle" /> */}

                    </Menu>
                </section>
                <section  style={{width:'15%',flexDirection:'row',display:'flex',justifyContent:'center',alignItems:'center',color:'black',borderLeft:'2px solid rgb(246,246,246)'}}>
                <span style={{color:isOutputMenuOpen?'#6A7BFF':'#202020',display:'flex',alignItems:'center',cursor:'pointer'}} onClick={handleOutputMenuOpen}>Output Language
                {
                    isOutputMenuOpen?
                    <ExpandLessIcon style={{marginLeft:'10px'}} />
                    :               
                    <ExpandMoreIcon style={{marginLeft:'10px'}}/>
                }

                </span>

                <Menu
                        // anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                        id={'profile_menu'}
                 
                        keepMounted
                        anchorEl={isOutputMenuOpen}
                        open={Boolean(isOutputMenuOpen)}
                        onClose={handleOutputMenuClose}
                        style={{marginTop:'60px',textAlign:'center'}}
                        >
                            {
                                languages.map((elem,index)=>{
                                    return  <Langue lang={elem} activeLangue={activeLanguages.output} handler={handleOutputActiveLanguage} />
                                }
                                )}
                       
                        {/* <Divider variant="middle" /> */}

                    </Menu>
                </section>
                <section   style={{width:'10%',flexDirection:'row',display:'flex',justifyContent:'center',alignItems:'center',color:'#202020',borderLeft:'2px solid rgb(246,246,246)',cursor:'pointer'}}>
                    <Link to='/home/favorite' style={{textDecoration:'none'}} whileHover={{ color: "#6A7BFF" }}  ><motion.span whileHover={{ color: "#6A7BFF" }} style={{color:'#202020'}}>Favorite List</motion.span></Link>
                </section>
                <section style={{width:'15%',flexDirection:'row',display:'flex',justifyContent:'center',alignItems:'center',borderLeft:'2px solid rgb(246,246,246)'}}>
                <span style={{color:'#6A7BFF',display:'flex',alignItems:'center',fontWeight:'bold',cursor:'pointer'}} onClick={handleMenuOpen}>{currentWorkspace.name}
                {
                    isMenuOpen?
                    <ExpandLessIcon style={{marginLeft:'10px'}}/>
                    :               
                    <ExpandMoreIcon style={{marginLeft:'10px'}}/>
                }
                </span>

                    <Menu
                        // anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                        id={'profile_menu'}
                        keepMounted
                        anchorEl={isMenuOpen}
                        open={Boolean(isMenuOpen)}
                        onClose={handleMenuClose}
                        style={{marginTop:'60px',textAlign:'center'}}
                        >
                            {
                                workSpace.map((elem,index)=>{
                                   return  index===workSpace.length-1?
                                    <WorkspaceItem workspace={elem} handler={handleWorkeSpaces} />
                                    :
                                    <WorkspaceItem workspace={elem} divider handler={handleWorkeSpaces}/>
                                })
                            }
                       
                        {/* <Divider variant="middle" /> */}

                    </Menu>

                </section>
                <section style={{width:'15%',flexDirection:'row',display:'flex',justifyContent:'center',alignItems:'center',borderLeft:'2px solid rgb(246,246,246)'}}>
                    <Avatar variant="square" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Felix_Cat-Haha.svg/1200px-Felix_Cat-Haha.svg.png" className={classes.large} />
                    <span style={{textTransform:'capitalize',color:isProfileMenu?'#6A7BFF':'#202020',display:'flex',alignItems:'center',cursor:'pointer'}} onClick={handleProfileMenuOpen}>
                        {_getuserName()}
                        {
                    isProfileMenu?
                    <ExpandLessIcon style={{marginLeft:'10px'}}/>
                    :               
                    <ExpandMoreIcon style={{marginLeft:'10px'}}/>
                }
                        </span>
                    
              
                    <Menu
                        // anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                        id={'profile_menu'}
                        keepMounted
                        anchorEl={isProfileMenu}
                        open={Boolean(isProfileMenu)}
                        onClose={handleProfileMenuClose}
                        style={{marginTop:'70px',textAlign:'center'}}>
                                    <Link to='/home/profile' onClick={handleProfileMenuClose} style={{textDecoration:'none'}}>
                                      <MenuItem  onClick={handleProfileMenuClose} style={{width:'150px',textAlign:'center',fontSize:'13px',display:"flex",justifyContent:'center',color:'white'}} >Profile</MenuItem>
                                    </Link>
                                    <Divider variant="middle" style={{background:'white'}} />
                                    <Link to='/home/workspaces' onClick={handleProfileMenuClose} style={{textDecoration:'none'}}>
                                      <MenuItem style={{width:'150px',textAlign:'center',fontSize:'13px',display:"flex",justifyContent:'center',color:'white'}} >Workspaces</MenuItem>
                                    </Link>
                                    <Divider variant="middle" style={{background:'white'}} />
                                    <MenuItem onClick={handleProfileMenuClose}  style={{width:'150px',textAlign:'center',fontSize:'13px',display:"flex",justifyContent:'center',color:'white'}} >Logout</MenuItem>    
                       
                        {/* <Divider variant="middle" /> */}

                    </Menu>
                </section> 
          </div>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
             {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaperWeb,
            }}
            variant="permanent"
            open
          >
           <CustomAccording />
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {
          location.pathname==='/home/profile' && 
          <Grid item md={12} xs ={12} style={{height:'100%',overflowY:'auto'}}>
              <ProfileContainer />
          </Grid>
        }
        {
          location.pathname==='/home/workspaces' && 
          <Grid item md={12} xs ={12} style={{height:'100%',overflowY:'auto'}}>
              <WorkspacesContainer />
          </Grid>
        }
        {
          location.pathname==='/home/favorite' && 
          <Grid item md={12} xs ={12} style={{height:'100%',overflowY:'auto'}}>
            <FavoriteContainer />
          </Grid>
        }
          {
          location.pathname==='/home' && 
          <>
          <Empty />
          </>
        }
        {
            location.pathname!=='/home/profile' &&  location.pathname!=='/home/workspaces' && location.pathname!=='/home/favorite' && location.pathname!=='/home' && 
          <>
            <Grid item md={6} xs ={12} style={{height:'100%',overflowY:'auto'}}>
                          <Switch>
                                <Route path='/home/product_description' component={ProductForm}/>
                                <Route path='/home/emailheadlines' component={EmailForm}/>
                                <Route path='/home/facebookheadlines' component={FacebookHeadLinesForm}/>
                                <Route path='/home/facebooklinkdesc' component={FacebookLinkDescForm}/>
                                <Route path='/home/facebookprimarytext' component={FacebookPrimaryTextForm}/>
                                <Route path='/home/googledescription' component={GoogleDescriptionForm}/>
                                <Route path='/home/googleheadlines' component={GoogleHeadlinesForm}/>
                                <Route path='/home/aida' component={AidaForm}/>
                                <Route path='/home/bab' component={BABForm}/>
                                <Route path='/home/emotionalAngles' component={EmoAnglesForm}/>
                                <Route path='/home/featureAdvantageBenefit' component={FABForm}/>
                                <Route path='/home/featureToBenefits' component={FTBForm}/>
                                <Route path='/home/functionalBenifit' component={FunctionalBenefitForm}/>
                                <Route path='/home/marketingAngles' component={MarketingAnglesForm}/>
                                <Route path='/home/PASolution' component={PASForm}/>
                                <Route path='/home/Ppp' component={PPPForm}/>
                                <Route path='/home/blogIntro' component={BlogIntroForm}/>
                                <Route path='/home/listicles' component={ListiclesForm}/>



                          </Switch>
            </Grid>
            <Grid item md={6} xs ={12} style={{height:'100%',overflowY:'auto'}}>
              <Result />
            </Grid>
          </>
        }
      
       
       
   
      </main>
    </div>
  );
}

CustomTopBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default CustomTopBar;
