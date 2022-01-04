import { Hero } from "../components/Hero";
import { useEffect, useState } from "react";
import groq from "groq";
import client from "../client";
import { Grid } from "../components/Grid";
import { Card } from "../components/Card";
import { TextBlock } from "../components/TextBlock";
import { theme } from "../styles/styles";
import { Loader } from "../components/Loader";

export default function About() {
  return (
    <div>
      <h1>Om</h1>
    </div>
  );
}
