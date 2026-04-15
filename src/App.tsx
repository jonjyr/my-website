import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainLayout } from "./components/MainLayout";
import { Card, CardHeader, CardBody } from "./components/Card";
import { Text } from "./components/Text";
import { Button } from "./components/Button";

const ProjectsPage = () => (
  <Card background="surface" size="md">
    <CardHeader>
      <Text font="base" size="md">Projects Overview</Text>
    </CardHeader>
    <CardBody>
      <Text font="base" size="md">List of active project modules.</Text>
    </CardBody>
  </Card>
);

const HomePage = () => (
  <Card background="surface" size="md">
    <CardHeader>
      <Text font="base" size="md">Welcome Home</Text>
    </CardHeader>
    <CardBody>
      <Button variant="primary" size="md">Get Started</Button>
    </CardBody>
  </Card>
);

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route element={<MainLayout gap="md" padding="md" />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default App;