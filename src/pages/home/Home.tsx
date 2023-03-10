import { World, ControlBar, DrawerForm, LayerList, QuakeModal, LayerModal } from 'components';

export function Home(): JSX.Element {
  return (
    <div style={{ position: 'relative' }}>
      <ControlBar />
      <LayerList mode="overlay" />
      <World />
      <DrawerForm />
      <QuakeModal />
      <LayerModal />
    </div>
  );
}
