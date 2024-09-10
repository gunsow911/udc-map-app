import { parse } from "papaparse";
import { useEffect, useState } from "react";
import { LatLng } from "leaflet";

type Aed = {
  latLng: LatLng;
  name: string;
  detail: string;
};

/**
 * AEDの設置場所のデータを取得するフック
 * @see https://yamaguchi-opendata.jp/ckan/dataset/aed_sechilist
 */
export const useAedData = () => {
  const [data, setData] = useState<Aed[]>();

  useEffect(() => {
    const loadAedData = async () => {
      const filepath = "/data/aed.csv";
      const response = await fetch(filepath);
      const csv = await response.text();
      const parsedCsv = parse<{ [key: string]: any }>(csv, {
        header: true,
        skipEmptyLines: true,
        dynamicTyping: true,
      });

      const aedList = parsedCsv.data.map<Aed>((row) => {
        const latLng = new LatLng(row["緯度"], row["経度"]);
        const name = row["名称"];
        const detail = row["設置位置"];
        const aed: Aed = {
          latLng: latLng,
          name: name,
          detail: detail,
        };
        return aed;
      });
      setData(aedList);
    };
    loadAedData();
  }, []);

  return data;
};
