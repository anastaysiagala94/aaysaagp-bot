import React, { useEffect, useState } from "react";
import { TimePicker, Button } from "antd";
import { getSettings, saveSettings } from "../api";
import dayjs from "dayjs";

export default function ScheduleManager() {
  const [schedule, setSchedule] = useState({ everyHours: 6, startTime: "08:00", endTime: "22:00" });

  useEffect(() => {
    getSettings().then(res => setSchedule(res.data.postingSchedule));
  }, []);

  const onChange = (field, value) => {
    setSchedule({ ...schedule, [field]: value.format("HH:mm") });
  };

  const handleSave = () => {
    getSettings().then(res => {
      const newSettings = { ...res.data, postingSchedule: schedule };
      saveSettings(newSettings);
    });
  };

  return (
    <>
      <TimePicker value={dayjs(schedule.startTime, "HH:mm")} onChange={v => onChange("startTime", v)} format="HH:mm" />
      <TimePicker value={dayjs(schedule.endTime, "HH:mm")} onChange={v => onChange("endTime", v)} format="HH:mm" />
      <Button type="primary" onClick={handleSave}>Save Schedule</Button>
    </>
  );
}