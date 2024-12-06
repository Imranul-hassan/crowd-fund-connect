import { createContext } from "react";

export const campaignContext = createContext();

const CampaignProvider = ({children}) => {
    
    const campaignInfo ={
        
    }
    return (
        <div>
            <campaignContext.Provider value={campaignInfo}>
                {
                    children
                }
            </campaignContext.Provider>
        </div>
    );
};

export default CampaignProvider;