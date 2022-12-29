import * as React from "react";

import {
    AppBar,
    Box,
    Button,
    Container,
    IconButton,
    Menu,
    MenuItem,
    Toolbar
} from "@mui/material";

import MenuIcon from '@mui/icons-material/Menu';

import {
    Link as RouterLink,
    Route,
    Routes
} from "react-router-dom";

import {DefaultLayout} from "src/client/DefaultLayout";
import {NavButton} from "src/common/NavButton";

import Assignments from "src/pages/Assignments.mdx";
import Calendar from "src/pages/Calendar.mdx";
import Home from "src/pages/Home.mdx";
import Projects from "src/pages/Projects.mdx";

/* PROJECTS
import ProjectBloom from "src/projects/bloom/project_post.mdx";
import ProjectBuzzed from "src/projects/buzzed/project_post.mdx";
import ProjectClark from "src/projects/clark/project_post.mdx";
import ProjectClosr from "src/projects/closr/project_post.mdx";
import ProjectCupanion from "src/projects/cupanion/project_post.mdx";
import ProjectDispurrse from "src/projects/dispurrse/project_post.mdx";
import ProjectEasyList from "src/projects/easylist/project_post.mdx";
import ProjectFoClass from "src/projects/foclass/project_post.mdx";
import ProjectQuik from "src/projects/quik/project_post.mdx";
import ProjectReci from "src/projects/reci/project_post.mdx";
import ProjectRecoverTogether from "src/projects/recovertogether/project_post.mdx";
import ProjectSousChef from "src/projects/souschef/project_post.mdx";
import ProjectSprout from "src/projects/sprout/project_post.mdx";
import ProjectStackBased from "src/projects/stackbased/project_post.mdx";
import ProjectWasteWizard from "src/projects/wastewizard/project_post.mdx";
 */

import AssignmentsOverview from "src/content/assignments/Overview.mdx"
import Assignment0 from "src/content/assignments/assignment0/Assignment0.mdx"
import Assignment1 from "src/content/assignments/assignment1/Assignment1.mdx"
import Assignment2 from "src/content/assignments/assignment2/Assignment2.mdx"
import Assignment3 from "src/content/assignments/assignment3/Assignment3.mdx"
import Assignment4 from "src/content/assignments/assignment4/Assignment4.mdx"

export const App: React.FunctionComponent = () => {

    const [menuAnchorEl, setMenuAnchorEl] = React.useState<null | HTMLElement>(null);

    const handleOpenMenu = (event: React.MouseEvent<HTMLElement>) => {
        setMenuAnchorEl(event.currentTarget);
    };

    const handleCloseMenu = () => {
        setMenuAnchorEl(null);
    };

    return (
        <React.Fragment>
            <AppBar position="static">
                <Container>
                    <Toolbar disableGutters>
                        {/* Sizes >= md render navigation with buttons */}
                        <Box
                            sx={{
                                display: { xs: 'none', md: 'flex' },
                                flexDirection: "row"
                            }}
                            width="100%"
                            role="navigation"
                            aria-label="Primary"
                        >
                            <NavButton to="/" match="never">CSE 440 - Introduction to HCI - Spring 2022</NavButton>
                            <Box flexGrow={1}/>
                            <NavButton to="/projects">Projects</NavButton>
                            <NavButton to="/assignments">Assignments</NavButton>
                            <NavButton to="/calendar">Calendar</NavButton>
                        </Box>
                        {/* Sizes < md render navigation with collapsible menu icon */}
                        <Box
                            sx={{
                                display: { xs: 'flex', md: 'none' },
                                flexDirection: "row"
                            }}
                            width="100%"
                            role="navigation"
                            aria-label="Primary"
                        >
                            <NavButton to="/" match="never">CSE 440 - Spring 2022</NavButton>
                            <Box flexGrow={1}/>
                            <IconButton
                                size="large"
                                aria-label="Menu"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenMenu}
                                color="inherit"
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={menuAnchorEl}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'right',
                                }}
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                open={menuAnchorEl != null}
                                onClose={handleCloseMenu}
                                sx={{
                                    // Ensures the menu disappears if display changes while menu is open
                                    display: { xs: 'block', md: 'none' },
                                }}
                            >
                                <MenuItem
                                    onClick={handleCloseMenu}
                                    disableGutters
                                    sx={{padding: "0"}}
                                >
                                    <Button
                                        component={RouterLink}
                                        sx={{justifyContent: "left", minHeight: "48px", width: "100%"}}
                                        to="/projects"
                                    >
                                        Projects
                                    </Button>
                                </MenuItem>
                                <MenuItem
                                    onClick={handleCloseMenu}
                                    disableGutters
                                    sx={{padding: "0"}}
                                >
                                    <Button
                                        component={RouterLink}
                                        sx={{justifyContent: "left", minHeight: "48px", width: "100%"}}
                                        to="/assignments"
                                    >
                                        Assignments
                                    </Button>
                                </MenuItem>
                                <MenuItem
                                    onClick={handleCloseMenu}
                                    disableGutters
                                    sx={{padding: "0"}}
                                >
                                    <Button
                                        component={RouterLink}
                                        sx={{justifyContent: "left", minHeight: "48px", width: "100%"}}
                                        to="/calendar"
                                    >
                                        Calendar
                                    </Button>
                                </MenuItem>
                            </Menu>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
            <Container>
                <DefaultLayout>
                    <Routes>
                        <Route path="/" element={<Home/>} />
                        <Route path="/projects" element={<Projects/>} />
                        {/* PROJECTS
                        <Route path="/projects/bloom" element={<ProjectBloom/>} />
                        <Route path="/projects/buzzed" element={<ProjectBuzzed/>} />
                        <Route path="/projects/clark" element={<ProjectClark/>} />
                        <Route path="/projects/closr" element={<ProjectClosr/>} />
                        <Route path="/projects/cupanion" element={<ProjectCupanion/>} />
                        <Route path="/projects/dispurrse" element={<ProjectDispurrse/>} />
                        <Route path="/projects/easylist" element={<ProjectEasyList/>} />
                        <Route path="/projects/foclass" element={<ProjectFoClass/>} />
                        <Route path="/projects/quik" element={<ProjectQuik/>} />
                        <Route path="/projects/reci" element={<ProjectReci/>} />
                        <Route path="/projects/recovertogether" element={<ProjectRecoverTogether/>} />
                        <Route path="/projects/souschef" element={<ProjectSousChef/>} />
                        <Route path="/projects/sprout" element={<ProjectSprout/>} />
                        <Route path="/projects/stackbased" element={<ProjectStackBased/>} />
                        <Route path="/projects/wastewizard" element={<ProjectWasteWizard/>} />
                        */}
                        <Route path="/assignments" element={<Assignments/>}>
                            <Route path="" element={<AssignmentsOverview/>} />
                            <Route path="assignment0" element={<Assignment0/>} />
                            <Route path="assignment1" element={<Assignment1/>} />
                            <Route path="assignment2" element={<Assignment2/>} />
                            <Route path="assignment3" element={<Assignment3/>} />
                            <Route path="assignment4" element={<Assignment4/>} />
                        </Route>
                        <Route path="/calendar" element={<Calendar/>} />
                    </Routes>
                </DefaultLayout>
            </Container>
        </React.Fragment>
    );
}

export default App;
