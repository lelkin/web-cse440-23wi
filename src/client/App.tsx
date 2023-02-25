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

/* PROJECTS */

import ProjectBFRBreak from '../projects/bfrbreak/project_post.mdx';
import ProjectEmotiVerse from '../projects/emotiverse/project_post.mdx';
import ProjectGreenCloset from '../projects/greencloset/project_post.mdx';
import ProjectGymStar from '../projects/gymstar/project_post.mdx';
import ProjectHuddle from '../projects/huddle/project_post.mdx';
import ProjectLingual from '../projects/lingual/project_post.mdx';
import ProjectMediSymp from '../projects/medisymp/project_post.mdx';
import ProjectNomNom from '../projects/medisymp/project_post.mdx';
import ProjectOptimizeMe from '../projects/optimizeme/project_post.mdx';
import ProjectPenPal from '../projects/penpal/project_post.mdx';
import ProjectPinPal from '../projects/pinpal/project_post.mdx';
import ProjectSmartBoxer from '../projects/smartboxer/project_post.mdx';
import ProjectStrelmo from '../projects/strelmo/project_post.mdx';
import ProjectTheKiddeTable from '../projects/thekiddietable/project_post.mdx';
import ProjectTracne from '../projects/tracne/project_post.mdx';
import ProjectWishbone from '../projects/wishbone/project_post.mdx';

import ProjectTemplate from "src/projects/template/project_post.mdx";

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
                            <NavButton to="/" match="never">CSE 440 - Introduction to HCI - Winter 2023</NavButton>
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
                            <NavButton to="/" match="never">CSE 440 - Winter 2023</NavButton>
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

                        {/* PROJECTS */}
                        <Route path="/projects/bfrbreak" element={<ProjectBFRBreak/>} />
                        <Route path="/projects/emotiverse" element={<ProjectEmotiVerse/>} />
                        <Route path="/projects/greencloset" element={<ProjectGreenCloset/>} />
                        <Route path="/projects/gymstar" element={<ProjectGymStar/>} />
                        <Route path="/projects/huddle" element={<ProjectHuddle/>} />
                        <Route path="/projects/lingual" element={<ProjectLingual/>} />
                        <Route path="/projects/medisymp" element={<ProjectMediSymp/>} />
                        <Route path="/projects/nomnom" element={<ProjectNomNom/>} />
                        <Route path="/projects/optimizeme" element={<ProjectOptimizeMe/>} />
                        <Route path="/projects/penpal" element={<ProjectPenPal/>} />
                        <Route path="/projects/pinpal" element={<ProjectPinPal/>} />
                        <Route path="/projects/smartboxer" element={<ProjectSmartBoxer/>} />
                        <Route path="/projects/strelmo" element={<ProjectStrelmo/>} />
                        <Route path="/projects/thekiddietable" element={<ProjectTheKiddeTable/>} />
                        <Route path="/projects/tracne" element={<ProjectTracne/>} />
                        <Route path="/projects/wishbone" element={<ProjectWishbone/>} />

                        <Route path="/projects/template" element={<ProjectTemplate/>} />
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
