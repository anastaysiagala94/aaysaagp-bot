import React, { useEffect, useState } from "react";
import { Table, Input, Button } from "antd";
import { getSettings, saveSettings } from "../api";

export default function ServiceManager() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    getSettings().then(res => setServices(res.data.services));
  }, []);

  // similar pattern to ZipManager: edit names, tiers, bundles

  return (
    <>
      <Button /* add new service */>Add Service</Button>
      <Table dataSource={services} rowKey="id">
        <Table.Column title="ID" dataIndex="id" />
        <Table.Column title="Name" dataIndex="name" render={(text, rec) => (
          <Input defaultValue={text} /* onChange update service name*/ />
        )} />
        {/* More columns for tiers & bundles */}
      </Table>
      <Button type="primary" /* onClick save */>Save Services</Button>
    </>
  );
}