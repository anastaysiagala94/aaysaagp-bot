import React, { useEffect, useState } from "react";
import { Table, Input, Button } from "antd";
import { getSettings, saveSettings } from "../api";

export default function ZipManager() {
  const [zips, setZips] = useState([]);

  useEffect(() => {
    getSettings().then(res => setZips(res.data.zips));
  }, []);

  const updateZip = (idx, val) => {
    const updated = [...zips];
    updated[idx] = val;
    setZips(updated);
  };

  const addZip = () => setZips([...zips, ""]);

  const handleSave = () => {
    getSettings().then(res => {
      const newSettings = { ...res.data, zips };
      saveSettings(newSettings);
    });
  };

  return (
    <>
      <Button onClick={addZip} style={{ marginBottom: 16 }}>Add ZIP</Button>
      <Table dataSource={zips.map((z, i) => ({ key: i, zip: z }))} pagination={false}>
        <Table.Column title="ZIP Code" dataIndex="zip" render={(text, record) => (
          <Input defaultValue={text} onChange={e => updateZip(record.key, e.target.value)} />
        )} />
      </Table>
      <Button type="primary" onClick={handleSave}>Save</Button>
    </>
  );
}