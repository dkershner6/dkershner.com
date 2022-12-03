import React, { ReactElement, useMemo } from "react";

import { Tab, Tabs } from "@mui/material";
import { useRouter } from "next/router";

enum NavigationTab {
    ConsultingServices = "Services",
    Blog = "Blog",
}

const NAVIGATION_TAB_TO_ROUTE_MAP = {
    [NavigationTab.ConsultingServices]: "/",
    [NavigationTab.Blog]: "/blog",
};

const NavigationMenu = (): ReactElement => {
    const router = useRouter();

    const selectedTab = useMemo(() => {
        if (router.pathname === "/") {
            return NavigationTab.ConsultingServices;
        }

        if (router.pathname.startsWith("/blog")) {
            return NavigationTab.Blog;
        }

        return false;
    }, [router.pathname]);

    return (
        <Tabs value={selectedTab} variant="scrollable" scrollButtons="auto">
            <Tab
                component="a"
                label={NavigationTab.ConsultingServices}
                value={NavigationTab.ConsultingServices}
                href={
                    NAVIGATION_TAB_TO_ROUTE_MAP[
                        NavigationTab.ConsultingServices
                    ]
                }
            />
            <Tab
                component="a"
                label={NavigationTab.Blog}
                value={NavigationTab.Blog}
                href={NAVIGATION_TAB_TO_ROUTE_MAP[NavigationTab.Blog]}
            />
        </Tabs>
    );
};

export default NavigationMenu;
