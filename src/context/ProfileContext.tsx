import React, { createContext, useState, ReactNode, useEffect } from "react";

interface Profile {
  userId: string;
  name: string;
  email: string;
  age?: number;
}

interface ProfileContextType {
  profiles: Profile[];
  saveProfile: (data: Profile) => void;
  editProfile: (userId: string, data: Profile) => void;
  deleteProfile: (userId: string) => void;
}

export const ProfileContext = createContext<ProfileContextType>({
  profiles: [],
  saveProfile: () => {},
  editProfile: () => {},
  deleteProfile: () => {},
});

export const ProfileProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [profiles, setProfiles] = useState<Profile[]>([]);

  useEffect(() => {
    const storedProfiles = localStorage.getItem("profilesData");
    if (storedProfiles) {
      setProfiles(JSON.parse(storedProfiles));
    }
  }, []);

  const saveProfilesToStorage = (profiles: Profile[]) => {
    localStorage.setItem('profilesData', JSON.stringify(profiles));
  };

  const saveProfile = (data: Profile) => {
    const newProfile = { ...data, userId: Date.now().toString() };
    const updatedProfiles = [...profiles, newProfile];
    setProfiles(updatedProfiles);
    saveProfilesToStorage(updatedProfiles);
  };

  const editProfile = (userId: string, data: Profile) => {
    const updatedProfiles = profiles.map((profile) =>
      profile.userId === userId ? { ...data, userId } : profile
    );
    setProfiles(updatedProfiles);
    saveProfilesToStorage(updatedProfiles);
  };

  const deleteProfile = (userId: string) => {
    const updatedProfiles = profiles.filter((profile) => profile.userId !== userId);
    setProfiles(updatedProfiles);
    saveProfilesToStorage(updatedProfiles);
  };

  return (
    <ProfileContext.Provider
      value={{ profiles, saveProfile, editProfile, deleteProfile }}
    >
      {children}
    </ProfileContext.Provider>
  );
};
