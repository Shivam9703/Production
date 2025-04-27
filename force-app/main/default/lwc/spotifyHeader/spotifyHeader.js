import { LightningElement, wire, track, api } from 'lwc';
//import Spotify from '@salesforce/resourceUrl/Spotify';
import Spotify from '@salesforce/resourceUrl/SpotifyWhite';
import HAMBURGER_ICON from '@salesforce/resourceUrl/HamburgerIcon';
import X_ICON from '@salesforce/resourceUrl/Xicon';

import { CurrentPageReference, NavigationMixin } from 'lightning/navigation';
import getNavigationMenuItems from '@salesforce/apex/NavigationMenuItemsController.getNavigationMenuItems';
import isGuestUser from '@salesforce/user/isGuest';
import basePath from '@salesforce/community/basePath';

export default class SpotifyHeader extends NavigationMixin(LightningElement) {

    spotifyLogo = Spotify;
    @api buttonLabel;
    @api buttonRedirectPageAPIName;
    @api menuName;
    @track stringifyMenu ;
    @api loginMenu;

    error;
    href = basePath;
    menuItems = [];
    loginItem = [];
    publishedState;
    hamburgerIcon = HAMBURGER_ICON;
    xIcon = X_ICON;

    @wire(getNavigationMenuItems, {
        menuName: '$menuName',
        publishedState: '$publishedState'
    })
    wiredMenuItems({ error, data }) {
        console.log('in data -> ' + JSON.stringify(data));
        if (data) {
            this.menuItems = data
                .map((item, index) => {
                    return {
                        target: item.Target,
                        id: index,
                        label: item.Label,
                        defaultListViewId: item.DefaultListViewId,
                        type: item.Type,
                        accessRestriction: item.AccessRestriction
                    };
                })
                .filter((item) => {
                    // Only show "Public" items if guest user
                    return (
                        item.accessRestriction === 'None' ||
                        (item.accessRestriction === 'LoginRequired' &&
                            !isGuestUser)
                    );
                });
                console.log('this.menuItems -->> ' + JSON.stringify(this.menuItems));
                this.stringifyMenu = JSON.stringify(this.menuItems);
            this.error = undefined;
        } else if (error) {
            console.log('in error');
            this.error = error;
            this.menuItems = [];
            console.log(`Navigation menu error: ${JSON.stringify(this.error)}`);
        }
    }

    @wire(getNavigationMenuItems, {
        menuName: '$loginMenu',
        publishedState: '$publishedState'
    })
    wiredLoginMenuItems({ error, data }) {
        console.log('in data -> ' + JSON.stringify(data));
        if (data) {
            this.loginItem = data
                .map((item, index) => {
                    return {
                        target: item.Target,
                        id: index,
                        label: item.Label,
                        defaultListViewId: item.DefaultListViewId,
                        type: item.Type,
                        accessRestriction: item.AccessRestriction
                    };
                })
                .filter((item) => {
                    // Only show "Public" items if guest user
                    return (
                        item.accessRestriction === 'None' ||
                        (item.accessRestriction === 'LoginRequired' &&
                            !isGuestUser)
                    );
                });
            this.error = undefined;
        } else if (error) {
            console.log('in error');
            this.error = error;
            this.menuItems = [];
            console.log(`Navigation menu error: ${JSON.stringify(this.error)}`);
        }
    }S

    @wire(CurrentPageReference)
    setCurrentPageReference(currentPageReference) {
        const app =
            currentPageReference &&
            currentPageReference.state &&
            currentPageReference.state.app;
        if (app === 'commeditor') {
            this.publishedState = 'Draft';
        } else {
            this.publishedState = 'Live';
        }
    }
}