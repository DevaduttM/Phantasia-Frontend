"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { db } from "../firebase"; // Assume you have already set up Firebase
import { collection, getDocs, addDoc, query, where } from "firebase/firestore";
import {
  Menu,
  FolderPlus,
  MessageSquarePlus,
  PanelLeftOpen,
  PanelLeftClose,
} from "lucide-react";
import { UserAuth } from "../context/AuthContext";
import {
  Label,
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import { ChevronUpDownIcon } from "@heroicons/react/16/solid";
import { CheckIcon } from "@heroicons/react/20/solid";
export default function Home() {
  const { user, googleSignIn, logOut } = UserAuth();
  const handleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.error(error);
    }
  };

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.error(error);
    }
  };
  const people = [
    {
      id: 1,
      name: "Walter White",
      avatar: "https://i.imgur.com/S5qNPdj.png",
    },
    {
      id: 2,
      name: "Phil Dunphy",
      avatar: "https://i.imgur.com/vUvf6bW.jpeg",
    },
  ];

  const [story, setStory] = useState("");
  const [loading, setLoading] = useState(false);
  const [selected1, setSelected1] = useState(people[0]);
  const [selected2, setSelected2] = useState(people[0]);
  const [sidemenu, setSidemenu] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [isTall, setIsTall] = useState(false);
  const [savedItems, setSavedItems] = useState<any>([]);
  const handleChange = (e: any) => {
    const textarea = e.target;
    setStory(e.target.value);

    // Automatically adjust height
    textarea.style.height = "auto"; // Reset height
    textarea.style.height = `${textarea.scrollHeight}px`; // Adjust height

    // Check if scrollHeight exceeds 56px and update state
    textarea.scrollHeight > `${56}px` ? setIsTall(true) : setIsTall(false);
  };
  const handleGenerate = async () => {
    setLoading(true);
    if (story.trim() && user) {
      const docRef = await addDoc(collection(db, "Script"), {
        Question: story,
        Username: user.displayName,
        userId: user.uid, // Add user ID to the document
      });
    }
  };
  console.log(savedItems);
  useEffect(() => {
    async function fetchSessions() {
      if (user) {
        // Create a query to filter sessions by user ID
        const sessionsQuery = query(
          collection(db, "Script"),
          where("userId", "==", user.uid)
        );

        const querySnapshot = await getDocs(sessionsQuery);
        const sessionsData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        // Sort sessions by creation date (newest first)

        setSavedItems(sessionsData);
      } else {
        // Clear sessions when user logs out
        setSavedItems([]);
      }
    }

    fetchSessions();
  }, [user]); // Re-fetch when user changes

  const saveItem = async () => {
    if (story.trim() && user) {
      try {
        await addDoc(collection(db, "Script"), {
          Question: story,
          Username: user.displayName,
          userId: user.uid,
          createdAt: new Date().toISOString(),
        });
        setStory("");
        setIsTall(false);

        // Refresh sessions after saving
        const sessionsQuery = query(
          collection(db, "Script"),
          where("userId", "==", user.uid)
        );
        const querySnapshot = await getDocs(sessionsQuery);
        const sessionsData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        const sortedSessions = sessionsData.sort(
          (a: any, b: any) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
        setSavedItems(sortedSessions);
      } catch (error) {
        console.error("Error saving document: ", error);
      }
    }
  };

  return (
    <>
      <div className="min-h-screen  flex flex-col relative">
        {/* Header */}
        <header className="flex items-center justify-between px-10 py-5">
          <div className="flex items-center gap-5">
            {sidemenu ? (
              <PanelLeftClose
                onClick={() => setSidemenu(!sidemenu)}
                className="z-10 w-7 h-7 text-gray-600 hover:text-gray-800 transition-all duration-500 ease-in-out cursor-pointer"
              />
            ) : (
              <PanelLeftOpen
                onClick={() => setSidemenu(!sidemenu)}
                className="z-10 w-7 h-7 text-gray-600 hover:text-gray-800 transition-all duration-500 ease-in-out cursor-pointer"
              />
            )}
            <MessageSquarePlus
              onClick={saveItem}
              className="z-10 w-7 h-7 text-gray-600 cursor-pointer hover:text-gray-800 transition-all duration-500 ease-in-out "
            />
            <h1 className={` text-3xl text-[#4A4A4A] font-Gentona z-10`}>
              Phantasia
            </h1>
          </div>
          {!user ? (
            <button
              onClick={handleSignIn}
              className="px-5 mx-4 my-2 py-2 rounded-full bg-white shadow-md border font-Barlow border-gray-600 hover:bg-gray-100 transition-colors text-black"
            >
              Login
            </button>
          ) : (
            <div>
              <Image
                src={user.photoURL}
                alt="profile"
                width={40}
                height={40}
                className="rounded-full mr-2  border-gray-500 border-2"
                onClick={() => setShowProfile(!showProfile)}
              ></Image>
              {showProfile && (
                <button
                  onClick={handleSignOut}
                  className="absolute right-[2%] px-5 mx-4 my-2 py-2 rounded-full bg-white shadow-md border font-Barlow border-gray-600 hover:bg-gray-100 transition-colors text-black"
                >
                  Logout
                </button>
              )}
            </div>
          )}
        </header>

        {/* Main Content */}
        <main className="flex-1 flex flex-col">
          {/* Loading Circles */}
          <div className="flex-1 flex items-center justify-center">
            <div className="flex items-center gap-8">
              {loading ? (
                <>
                  <div className="w-[140px] h-[140px] rounded-full border border-gray-600 bg-white shadow-lg animate-circle"></div>
                  <div className="w-[100px] h-[100px] rounded-full border border-gray-600 bg-white shadow-lg animate-circle animation-delay-1"></div>
                  <div className="w-[40px] h-[40px] rounded-full border border-gray-600 bg-white shadow-lg animate-circle animation-delay-2"></div>
                </>
              ) : (
                <>
                  <div className="w-[140px] h-[140px] rounded-full border border-black bg-white shadow-lg "></div>
                  <div className="w-[100px] h-[100px] rounded-full border border-black bg-white shadow-lg "></div>
                  <div className="w-[40px] h-[40px] rounded-full border border-black bg-white shadow-lg "></div>
                </>
              )}
              <div className="absolute top-[20%] left-[86%] ">
                <Listbox value={selected1} onChange={setSelected1}>
                  <Label className="block text-sm/6 font-medium font-Barlow text-gray-900">
                    CHARACTER 1
                  </Label>
                  <div className="relative mt-2">
                    <ListboxButton className="grid w-full cursor-default grid-cols-1 rounded-xl bg-white py-2 pr-8 pl-2 text-left text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-gray-600 sm:text-sm/6">
                      <span className="col-start-1 row-start-1 flex items-center gap-3 pr-6">
                        <img
                          alt=""
                          src={selected1.avatar}
                          className="size-5 shrink-0 rounded-full"
                        />
                        <span className="block truncate">{selected1.name}</span>
                      </span>
                      <ChevronUpDownIcon
                        aria-hidden="true"
                        className="col-start-1 row-start-1 size-5 self-center mr-[-20px]  justify-self-end text-gray-500 sm:size-4"
                      />
                    </ListboxButton>

                    <ListboxOptions
                      transition
                      className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none data-[closed]:data-[leave]:opacity-0 data-[leave]:transition data-[leave]:duration-100 data-[leave]:ease-in sm:text-sm"
                    >
                      {people.map((person: any) => (
                        <ListboxOption
                          key={person.id}
                          value={person}
                          className="group relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900 data-[focus]:bg-gray-600 data-[focus]:text-white data-[focus]:outline-none"
                        >
                          <div className="flex items-center">
                            <img
                              alt=""
                              src={person.avatar}
                              className="size-5 shrink-0 rounded-full"
                            />
                            <span className="ml-3 block truncate font-normal group-data-[selected]:font-semibold">
                              {person.name}
                            </span>
                          </div>

                          <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-indigo-600 group-[&:not([data-selected])]:hidden group-data-[focus]:text-white">
                            <CheckIcon aria-hidden="true" className="size-5" />
                          </span>
                        </ListboxOption>
                      ))}
                    </ListboxOptions>
                    <Listbox value={selected2} onChange={setSelected2}>
                      <Label className="block text-sm/6 font-medium font-Barlow text-gray-900 mt-2">
                        CHARACTER 2
                      </Label>
                      <div className="relative mt-2">
                        <ListboxButton className="grid w-full cursor-default grid-cols-1 rounded-xl bg-white py-2 pr-8 pl-2 text-left text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-gray-600 sm:text-sm/6">
                          <span className="col-start-1 row-start-1 flex items-center gap-3 pr-6">
                            <img
                              alt=""
                              src={selected2.avatar}
                              className="size-5 shrink-0 rounded-full"
                            />
                            <span className="block truncate">
                              {selected2.name}
                            </span>
                          </span>
                          <ChevronUpDownIcon
                            aria-hidden="true"
                            className="col-start-1 row-start-1 size-5 self-center mr-[-20px]  justify-self-end text-gray-500 sm:size-4"
                          />
                        </ListboxButton>

                        <ListboxOptions
                          transition
                          className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none data-[closed]:data-[leave]:opacity-0 data-[leave]:transition data-[leave]:duration-100 data-[leave]:ease-in sm:text-sm"
                        >
                          {people.map((person: any) => (
                            <ListboxOption
                              key={person.id}
                              value={person}
                              className="group relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900 data-[focus]:bg-gray-600 data-[focus]:text-white data-[focus]:outline-none"
                            >
                              <div className="flex items-center">
                                <img
                                  alt=""
                                  src={person.avatar}
                                  className="size-5 shrink-0 rounded-full"
                                />
                                <span className="ml-3 block truncate font-normal group-data-[selected]:font-semibold">
                                  {person.name}
                                </span>
                              </div>

                              <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-indigo-600 group-[&:not([data-selected])]:hidden group-data-[focus]:text-white">
                                <CheckIcon
                                  aria-hidden="true"
                                  className="size-5"
                                />
                              </span>
                            </ListboxOption>
                          ))}
                        </ListboxOptions>
                      </div>
                    </Listbox>
                  </div>
                </Listbox>
              </div>
            </div>
          </div>
          {/* Input Field */}
          <div className="w-full px-4 py-10">
            <div className="max-w-2xl mx-auto relative">
              <textarea
                placeholder="Type your story here..."
                value={story}
                onChange={handleChange}
                className={`w-full caret-black text-black px-6 py-4 shadow-md font-Barlow rounded-xl border border-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-200 pr-32 bg-white resize-none overflow-hidden ${
                  isTall ? `rounded-xl` : `rounded-full`
                }`}
                rows={1}
              />
              <button
                onClick={handleGenerate}
                className="absolute font-Barlow right-2 top-1/2 -translate-y-1/2 px-6 py-2 mt-[-2px] bg-black text-white rounded-full hover:bg-gray-800 transition-colors"
              >
                Generate
              </button>
            </div>
          </div>
        </main>
      </div>
      <div
        className={`transition-all duration-500 ease-in-out absolute top-0 left-0 h-full bg-[#afafaf] shadow-lg ${
          sidemenu ? "w-1/5" : "w-0"
        }`}
      >
        <ul className="mt-20">
          {user &&
            savedItems.map((session: any) => (
              <li
                key={session.id}
                className="session-item text-nowrap shadow-md bg-[#999898] rounded-lg m-3 py-3 hover:opacity-80 transition-all duration-500 ease-in-out cursor-pointer"
              >
                <h1 className="font-Barlow text-lg ml-2">
                  {session.Question.slice(0, 32) + "..."}
                </h1>
              </li>
            ))}
        </ul>
      </div>
    </>
  );
}
