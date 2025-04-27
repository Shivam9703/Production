import { LightningElement } from 'lwc';
import Spotify from '@salesforce/resourceUrl/Spotify';

export default class LwrHeaderContext extends LightningElement {
    spotifyLogo = Spotify;
}