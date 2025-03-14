import { LightningElement, wire, track } from 'lwc';
import getAccountDetails from '@salesforce/apex/wireDemoMethod.getAccountDetails';

const columns = [
    { label: 'Name', fieldName: 'Name' },
    { label: 'Account Id', fieldName: 'Id' },
];

export default class WireDecoratorApexMethod extends LightningElement {
    columns = columns; // Column configuration for the data table
    @track data = []; // Holds the account data
    error; // Holds any error that occurs during the wire service
    showData = false; // Controls visibility of the data table

    // Wire the Apex method to fetch the account details
    @wire(getAccountDetails)
    wiredAcc({ data, error }) {
       

        if (data) {
            this.data = data;
            this.error = undefined; // Clear any previous error

        } else if (error) {
            this.error = error;
            this.data = []; // Clear any previous data
            console.error('Error occurred: ', error); // Log error for debugging
        }
    }

    // Handle Show button click - displays the account data
    handleShowData() {
        this.showData = true;
    }

    // Handle Hide button click - hides the account data
    handleHideData() {
        this.showData = false;
    }    
    }

