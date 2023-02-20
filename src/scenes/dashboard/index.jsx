import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import { mockTransactions } from "../../data/mockData";
import  DownloadOutlineIcon  from "@mui/icons-material/DownloadDoneOutlined";
import  EmailIcon  from "@mui/icons-material/Email";
import  PointOfSaleIcon  from "@mui/icons-material/PointOfSale";
import  PersonAddIcon  from "@mui/icons-material/PersonAdd";
import  TrafficIcon  from "@mui/icons-material/Traffic";
import LineChart from "../../components/LineChart";
import BarChart from "../../components/BarChart";
import GeographyChart from "../../components/GeographyChart";
import StatBox from "../../components/StatBox";
import ProgressCircle from "../../components/ProgressCircle";
import { color } from "@mui/system";


const Dashboard = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode)
    return (
    <Box m="20px">
        <Box display="flex" justifyContent="Space-between" alignItems="canter">
        <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />
        
        <Box>
            <Button 
            sx={{ backgoundColor: colors.blueAccent[700],
            color: colors.grey[100], 
            fontSize: "14px", 
            fontWeight: "bold", 
            padding: "10px 20px",
            }}
            >
                <DownloadOutlineIcon sx={{ mr: "10px"}} />
                Download Reports
            </Button>
        </Box>
        </Box>

        {/* GRID & CHART */}
        <Box 
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
        >
            {/* ROW 1*/}
            <Box gridColumn="span 3"
            backgroundColor={colors.primary[400]}
            display="flex"
            alignItems="center"
            justifyContent="center"
            >
                <StatBox 
                title="12,361"
                subtitle="Emails Sent"
                progress="0.75"
                increase="+14%"
                icon={
                    <EmailIcon
                    sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                    />
                }
                />
            </Box>
            <Box gridColumn="span 3"
            backgroundColor={colors.primary[400]}
            display="flex"
            alignItems="center"
            justifyContent="center"
            >
                <StatBox 
                title="432,229"
                subtitle="Sales Obtained"
                progress="0.5"
                increase="+21%"
                icon={
                    <PointOfSaleIcon
                    sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                    />
                }
                />
            </Box>
            <Box gridColumn="span 3"
            backgroundColor={colors.primary[400]}
            display="flex"
            alignItems="center"
            justifyContent="center"
            >
                <StatBox 
                title="32,441"
                subtitle="New Clients"
                progress="0.30"
                increase="+5%"
                icon={
                    <PersonAddIcon
                    sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                    />
                }
                />
            </Box>
            <Box gridColumn="span 3"
            backgroundColor={colors.primary[400]}
            display="flex"
            alignItems="center"
            justifyContent="center"
            >
                <StatBox 
                title="1,544,223"
                subtitle="Traffic Inbound"
                progress="0.80"
                increase="+43%"
                icon={
                    <TrafficIcon
                    sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                    />
                }
                />
            </Box>

            {/* ROW 2 */}
            <Box 
            gridColumn="span 8"
            gridRow="span 2"
            backgoundColor={colors.primary[400]}
            >
                <Box mt="25px"
                p="0 30px"
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                >
                    <Box>
                        <Typography variant="h5" fontWeight="600" color={colors.grey[100]}>
                            Revenue Generated
                        </Typography>
                        <Typography variant="h3" fontWeight="500" color={colors.greenAccent[500]}>
                            $59,342,55
                        </Typography>
                    </Box>

                    <Box>
                        <IconButton>
                            <DownloadOutlineIcon
                            sx={{ fontSize: "26px", color: colors.greenAccent[500] }}/>
                        </IconButton>
                    </Box>
                </Box>

                <Box height="250px" ml="-20px">
                    <LineChart isDashboard={true} />
                </Box>
                
                { /* TRANSACTIONS */}
                <Box>

                </Box>
            </Box>
        </Box>
    </Box>
    );
};
export default Dashboard;