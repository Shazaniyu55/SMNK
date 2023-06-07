import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import { useRouter } from "next/router";
import { useState } from "react";
import AddFloatingActionButtons from "../fab/Add";

export default function AddBottomNavigation({ label,handleClick }: { label: string,handleClick:()=>void }) {
  const [value, setValue] = useState(0);
 
  return (
    <Box sx={{ width: "100%" }} mt={3}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
    
            <BottomNavigationAction
            label={label}
            icon={
              <AddFloatingActionButtons
                handleClick={handleClick}
              />
            }
          />
      </BottomNavigation>
    
    </Box>
  );
}