// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.

function loadSavedStateFromStorage(){
    let state = {
        url: "",
        tenantId: "",
        clientId: ""
    };
    if (typeof(Storage) !== "undefined") {                
        state.url = localStorage.getItem("twinsUrl");
        state.tenantId = localStorage.getItem("twinsTenant");
        state.clientId = localStorage.getItem("twinsClient");
        state.clientSecret = localStorage.getItem("twinsClientSecret");
    }
    return state;
}

function saveStateToStorage(url, tenantId, clientId, clientSecret){
    if (typeof(Storage) !== "undefined") {
        localStorage.setItem("twinsUrl", url);
        localStorage.setItem("twinsTenant", tenantId);
        localStorage.setItem("twinsClient", clientId);                
        localStorage.setItem("twinsClientSecret", clientSecret);                
    }
}

function getTwinsInstanceRoot(){
    return localStorage.getItem("twinsUrl");
}

function getTwinsTenantId(){
    return localStorage.getItem("twinsTenant");
}

function getTwinsClientId(){
    return localStorage.getItem("twinsClient");
}

function getTwinsClientSecret(){
    return localStorage.getItem("twinsClientSecret");
}