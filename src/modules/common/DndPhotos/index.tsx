import React from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import DndPhotosCore from "./DndPhotosCore";
import { GridProvider } from "./GridContext";

interface Props {
  listUrl: some[];
  listPhotos: some[];
  isChecked: number[];
  handleChange(id: number, index: number): void;
  setTempListPhoto(list?: any): void;
  setListPhotos(value: some[]): void;
  setListPhotosId(value: any): void;
  listPhotosId: number[];
  chainStoreId: number;
}

const DndPhotos: React.FC<Props> = (props: Props) => {
  const {
    listUrl,
    isChecked,
    handleChange,
    setTempListPhoto,
    setListPhotos,
    listPhotos,
    setListPhotosId,
    listPhotosId,
    chainStoreId,
  } = props;

  return (
    <DndProvider backend={HTML5Backend}>
      <GridProvider listUrl={listUrl} setTempListPhoto={setTempListPhoto}>
        <DndPhotosCore
          listPhotos={listPhotos}
          isChecked={isChecked}
          handleChange={handleChange}
          setListPhotos={setListPhotos}
          setListPhotosId={setListPhotosId}
          listPhotosId={listPhotosId}
          chainStoreId={chainStoreId}
        />
      </GridProvider>
    </DndProvider>
  );
};

export default DndPhotos;
