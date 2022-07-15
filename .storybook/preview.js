import '../src/index.css';

//👇 Configures Storybook to log the actions( onArchiveTask and onPinTask ) in the UI.
/*parameters sono in genere utilizzati per controllare il comportamento delle 
funzionalità e dei componenti aggiuntivi di Storybook */
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },  /*actions ci consente di creare callback che 
          appaiono nel pannello delle azioni dell'interfaccia utente di Storybook quando si fa clic.  */
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
