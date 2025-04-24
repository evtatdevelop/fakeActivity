import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getResourceTypes, submit, outlook, mainpage, workplace, sap, resource, jira } from "./appSliceAPI";

const initialState = {
  loading: false,
  darkTheme: false,
  langMode: null,
  resourceTypes: [],
  resourceType: null,
  order: {},
}

export const getResourceList = createAsyncThunk( 'app/getResourceList', async () => await getResourceTypes({}) );
export const formSubmit   = createAsyncThunk( 'app/formSubmit', async ( data ) => await submit(data) );

export const getoutlook   = createAsyncThunk( 'app/getoutlook', async ( data ) => await outlook(data) );
export const getmainpage   = createAsyncThunk( 'app/getmainpage', async ( data ) => await mainpage(data) );
export const getworkplace   = createAsyncThunk( 'app/getworkplace', async ( data ) => await workplace(data) );
export const getsap   = createAsyncThunk( 'app/getsap', async ( data ) => await sap(data) );
export const getresource   = createAsyncThunk( 'app/getresource', async ( data ) => await resource(data) );
export const getjira   = createAsyncThunk( 'app/getjira', async ( data ) => await jira(data) );

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {

    setTheme: (state, action) => {
      state.darkTheme = action.payload;
      localStorage.setItem(`darkTheme`, JSON.stringify(action.payload));
    },

    setLangMode: (state, action) => {
      state.langMode = action.payload;
    },

    setResourceType: (state, action) => {
      state.resourceType = action.payload;
      state.order = {};
    },

    clearOrder: (state, action) => {
      state.order = {};
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(getResourceList.pending, ( state ) => { state.loading = true })
      .addCase(getResourceList.fulfilled, ( state, action ) => {
        state.loading = false;
        state.resourceTypes = action.payload;
      })

      .addCase(formSubmit.pending, ( state ) => { state.loading = true })
      .addCase(formSubmit.fulfilled, ( state, action ) => {
        state.loading = false;
        state.order = action.payload;
      })

      .addCase(getoutlook.pending, ( state ) => { state.loading = true })
      .addCase(getoutlook.fulfilled, ( state, action ) => {
        state.loading = false;
        console.log('getoutlook');
      })

      .addCase(getmainpage.pending, ( state ) => { state.loading = true })
      .addCase(getmainpage.fulfilled, ( state, action ) => {
        state.loading = false;
        console.log('getmainpage');
      })

      .addCase(getworkplace.pending, ( state ) => { state.loading = true })
      .addCase(getworkplace.fulfilled, ( state, action ) => {
        state.loading = false;
        console.log('getworkplace');
      })

      .addCase(getsap.pending, ( state ) => { state.loading = true })
      .addCase(getsap.fulfilled, ( state, action ) => {
        state.loading = false;
        console.log('getsap');
      })

      .addCase(getresource.pending, ( state ) => { state.loading = true })
      .addCase(getresource.fulfilled, ( state, action ) => {
        state.loading = false;
        console.log('getresource');
      })

      .addCase(getjira.pending, ( state ) => { state.loading = true })
      .addCase(getjira.fulfilled, ( state, action ) => {
        state.loading = false;
        console.log('getjira');
      })

  }
});

export const { setTheme, setLangMode, setResourceType, clearOrder } = appSlice.actions;

export const darkTheme = ( state ) => state.app.darkTheme;
export const langMode = ( state ) => state.app.langMode;
export const loading = ( state ) => state.app.loading;
export const resourceTypes = ( state ) => state.app.resourceTypes;
export const resourceType = ( state ) => state.app.resourceType;
export const order = ( state ) => state.app.order;

export default appSlice.reducer;
