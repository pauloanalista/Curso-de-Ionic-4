import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'componentSlides',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'instalacao',
    loadChildren: './instalacao/instalacao.module#InstalacaoPageModule'
  },
  {
    path: 'layout',
    loadChildren: './layout/layout.module#LayoutPageModule'
  },
  { path: 'layoutHeaderFooter', loadChildren: './layout-header-footer/layout-header-footer.module#LayoutHeaderFooterPageModule' },
  { path: 'layoutTabs', loadChildren: './layout-tabs/layout-tabs.module#LayoutTabsPageModule' },
  { path: 'layoutMenu', loadChildren: './layout-menu/layout-menu.module#LayoutMenuPageModule' },
  { path: 'layoutSplitPane', loadChildren: './layout-split-pane/layout-split-pane.module#LayoutSplitPanePageModule' },
  { path: 'layoutGrid', loadChildren: './layout-grid/layout-grid.module#LayoutGridPageModule' },
  { path: 'layoutCssUtilities', loadChildren: './layout-css-utilities/layout-css-utilities.module#LayoutCssUtilitiesPageModule' },
  { path: 'componentes', loadChildren: './componentes/componentes.module#ComponentesPageModule' },
  { path: 'componentActionSheet', loadChildren: './component-action-sheet/component-action-sheet.module#ComponentActionSheetPageModule' },
  { path: 'componentAlert', loadChildren: './component-alert/component-alert.module#ComponentAlertPageModule' },
  { path: 'componentBadges', loadChildren: './component-badges/component-badges.module#ComponentBadgesPageModule' },
  { path: 'componentButton', loadChildren: './component-button/component-button.module#ComponentButtonPageModule' },
  { path: 'componentCard', loadChildren: './component-card/component-card.module#ComponentCardPageModule' },
  { path: 'componentCheckbox', loadChildren: './component-checkbox/component-checkbox.module#ComponentCheckboxPageModule' },
  { path: 'componentRadio', loadChildren: './component-radio/component-radio.module#ComponentRadioPageModule' },
  { path: 'componentDatetime', loadChildren: './component-datetime/component-datetime.module#ComponentDatetimePageModule' },
  { path: 'componentDatetime', loadChildren: './component-datetime/component-datetime.module#ComponentDatetimePageModule' },
  { path: 'componentFab', loadChildren: './component-fab/component-fab.module#ComponentFabPageModule' },
  { path: 'componentInput', loadChildren: './component-input/component-input.module#ComponentInputPageModule' },
  { path: 'componentList', loadChildren: './component-list/component-list.module#ComponentListPageModule' },
  { path: 'componentLoading', loadChildren: './component-loading/component-loading.module#ComponentLoadingPageModule' },
  { path: 'componentModal', loadChildren: './component-modal/component-modal.module#ComponentModalPageModule' },
  { path: 'componentModalInterno', loadChildren: './component-modal-interno/component-modal-interno.module#ComponentModalInternoPageModule' },
  { path: 'componentRange', loadChildren: './component-range/component-range.module#ComponentRangePageModule' },
  { path: 'componentSelect', loadChildren: './component-select/component-select.module#ComponentSelectPageModule' },
  { path: 'componentSlides', loadChildren: './component-slides/component-slides.module#ComponentSlidesPageModule' },
  { path: 'componentSpinner', loadChildren: './component-spinner/component-spinner.module#ComponentSpinnerPageModule' },
  { path: 'componentToast', loadChildren: './component-toast/component-toast.module#ComponentToastPageModule' },
  { path: 'componentInfinitScroll', loadChildren: './component-infinit-scroll/component-infinit-scroll.module#ComponentInfinitScrollPageModule' },
  { path: 'componentPopover', loadChildren: './component-popover/component-popover.module#ComponentPopoverPageModule' },
  { path: 'componentRefresher', loadChildren: './component-refresher/component-refresher.module#ComponentRefresherPageModule' },
  { path: 'componentSearchbar', loadChildren: './component-searchbar/component-searchbar.module#ComponentSearchbarPageModule' },
  { path: 'componentToggle', loadChildren: './component-toggle/component-toggle.module#ComponentTogglePageModule' },
  { path: 'apiExterna', loadChildren: './api-externa/api-externa.module#ApiExternaPageModule' },
  { path: 'animacoes', loadChildren: './animacoes/animacoes.module#AnimacoesPageModule' },
  { path: 'componentesNativos', loadChildren: './componentes-nativos/componentes-nativos.module#ComponentesNativosPageModule' },
  { path: 'componentNativeCamera', loadChildren: './component-native-camera/component-native-camera.module#ComponentNativeCameraPageModule' },
  { path: 'componentNativeTextToSpeech', loadChildren: './component-native-text-to-speech/component-native-text-to-speech.module#ComponentNativeTextToSpeechPageModule' },
  
  
  
  
  
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
