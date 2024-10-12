import { NavBar } from "../components/NavBar";

const draweWidth = 240;

export const HomeLayout = () => {
  return (
    <Box sx={{display: 'flex'}}>
        <NavBar draweWidth={draweWidth}/>
    </Box>
        
  )
}
