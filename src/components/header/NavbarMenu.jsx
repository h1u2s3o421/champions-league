"use client";
import { Button, Navbar } from "flowbite-react";
import { Link } from "react-router-dom";

export default function NavbarMenu() {
  return (
    <Navbar fluid rounded>
      <Navbar.Brand>
        <Link to='/'>
          <img src="https://m.media-amazon.com/images/M/MV5BZjFhOWVhNTMtNmVhZC00YzNmLWIwZGYtNWNjOGVmMWNkN2NlXkEyXkFqcGdeQXVyNTQ4OTQ2NDQ@._V1_.jpg" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
        </Link>
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite React</span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Button>Get started</Button>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="#" active>
          Home
        </Navbar.Link>
        <Link to='/matches'>
          <Navbar.Link href="#">Matches</Navbar.Link>
        </Link>
        <Navbar.Link href="#">Services</Navbar.Link>
        <Navbar.Link href="#">Pricing</Navbar.Link>
        <Navbar.Link href="#">Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}