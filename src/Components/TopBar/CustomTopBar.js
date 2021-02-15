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
import logo from '../../Assets/img/pluma logo/Pluma Logo.png'
import '../../Assets/Css/TopBar.css'
import { motion } from 'framer-motion';
import Langue from '../Language Items/Langue';
import WorkspaceItem from '../Workspaces items/WorkspaceItem';
import {activeWorkspace} from '../../Selectors/WorkspaceSelector'
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
    width: '201px',
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
    paddingTop:'20px',
    border:'none',
    zIndex:'-99'
 
  
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    background:'rgb(245,246,250)'
  },
}));

function CustomTopBar(props) {
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
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );


  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
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
                        style={{marginTop:'35px',textAlign:'center'}}
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
                        style={{marginTop:'35px',textAlign:'center'}}
                        >
                            {
                                languages.map((elem,index)=>{
                                    return  <Langue lang={elem} activeLangue={activeLanguages.output} handler={handleOutputActiveLanguage} />
                                }
                                )}
                       
                        {/* <Divider variant="middle" /> */}

                    </Menu>
                </section>
                <motion.section  whileHover={{ color: "#6A7BFF" }} style={{width:'10%',flexDirection:'row',display:'flex',justifyContent:'center',alignItems:'center',color:'#202020',borderLeft:'2px solid rgb(246,246,246)',cursor:'pointer'}}>
                    Favorite List
                </motion.section>
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
                        style={{marginTop:'35px',textAlign:'center'}}
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
                        {`${user.first_name}.${user.last_name[0]}`}
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
                        style={{marginTop:'45px',textAlign:'center'}}
                        >
                            
                                
                                    <MenuItem style={{width:'150px',textAlign:'center',fontSize:'13px',display:"flex",justifyContent:'center',color:'white'}} >Profile</MenuItem>
                                    <Divider variant="middle" style={{background:'white'}} />
                                    <MenuItem style={{width:'150px',textAlign:'center',fontSize:'13px',display:"flex",justifyContent:'center',color:'white'}} >Logout</MenuItem>

                            
                           
                            
                       
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
            {web_drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum
          facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit
          gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id
          donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
          adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras.
          Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo quis
          imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. At augue eget
          arcu dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem
          donec massa sapien faucibus et molestie ac.
        </Typography>
        <Typography paragraph>
          Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget nulla
          facilisi etiam dignissim diam. Pulvinar elementum integer enim neque volutpat ac
          tincidunt. Ornare suspendisse sed nisi lacus sed viverra tellus. Purus sit amet volutpat
          consequat mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis risus sed
          vulputate odio. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in. In
          hendrerit gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem et
          tortor. Habitant morbi tristique senectus et. Adipiscing elit duis tristique sollicitudin
          nibh sit. Ornare aenean euismod elementum nisi quis eleifend. Commodo viverra maecenas
          accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam ultrices sagittis orci a.
        </Typography>
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
