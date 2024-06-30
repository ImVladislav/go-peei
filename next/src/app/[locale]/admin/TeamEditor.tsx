import React, { useState } from "react";
import { TEAM as initialTeam } from "../components/Team/TeamList/team-list.data";
import s from "./admin.module.scss";
import Translator from "../components/translator/Translator";

type TeamMember = {
  image: string;
  name: string;
  position: string;
  email: string;
  about: string;
};

const TeamEditor = () => {
  const [team, setTeam] = useState<TeamMember[]>(initialTeam);
  const [newMember, setNewMember] = useState<TeamMember>({
    image: "",
    name: "",
    position: "",
    email: "",
    about: "",
  });
  const [editingMember, setEditingMember] = useState<TeamMember | null>(null);
  const [editingIndex, setEditingIndex] = useState<number | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewMember((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddMember = () => {
    setTeam((prev) => [...prev, { ...newMember }]);
    setNewMember({
      image: "",
      name: "",
      position: "",
      email: "",
      about: "",
    });
  };

  const handleEditMember = (index: number) => {
    if (editingMember) {
      const updatedTeam = [...team];
      updatedTeam[index] = editingMember;
      setTeam(updatedTeam);
      setEditingMember(null);
      setEditingIndex(null);
    }
  };

  const handleDeleteMember = (index: number) => {
    const updatedTeam = team.filter((_, i) => i !== index);
    setTeam(updatedTeam);
  };

  return (
    <div className={s.container}>
      <h2>Team Editor</h2>
      <ul>
        {team.map((member, index) => (
          <li key={index} className={s.member}>
            {editingIndex === index ? (
              <div>
                <input
                  className={s.input}
                  type="text"
                  name="name"
                  value={editingMember?.name || ""}
                  onChange={(e) =>
                    setEditingMember((prev) =>
                      prev ? { ...prev, name: e.target.value } : null
                    )
                  }
                />
                <input
                  type="text"
                  name="position"
                  value={editingMember?.position || ""}
                  onChange={(e) =>
                    setEditingMember((prev) =>
                      prev ? { ...prev, position: e.target.value } : null
                    )
                  }
                />
                <input
                  type="text"
                  name="email"
                  value={editingMember?.email || ""}
                  onChange={(e) =>
                    setEditingMember((prev) =>
                      prev ? { ...prev, email: e.target.value } : null
                    )
                  }
                />
                <input
                  type="text"
                  name="about"
                  value={editingMember?.about || ""}
                  onChange={(e) =>
                    setEditingMember((prev) =>
                      prev ? { ...prev, about: e.target.value } : null
                    )
                  }
                />
                <button
                  className={s.button}
                  onClick={() => handleEditMember(index)}
                >
                  Save
                </button>
                <button
                  className={s.button}
                  onClick={() => {
                    setEditingMember(null);
                    setEditingIndex(null);
                  }}
                >
                  Cancel
                </button>
              </div>
            ) : (
              <div>
                <img src={member.image} alt={member.name} className={s.image} />

                <h3>
                  <Translator>{member.name}</Translator>
                </h3>
                <p>
                  <Translator>{member.position}</Translator>
                </p>
                <p>
                  <Translator>{member.email}</Translator>
                </p>
                <p>
                  <Translator>{member.about}</Translator>
                </p>
                <button
                  onClick={() => {
                    setEditingMember(member);
                    setEditingIndex(index);
                  }}
                >
                  Edit
                </button>
                <button onClick={() => handleDeleteMember(index)}>
                  Delete
                </button>
              </div>
            )}
          </li>
        ))}
      </ul>

      <h3>Add New Member</h3>
      <div className={s.newMemberForm}>
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={newMember.image}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={newMember.name}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="position"
          placeholder="Position"
          value={newMember.position}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="email"
          placeholder="Email"
          value={newMember.email}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="about"
          placeholder="About"
          value={newMember.about}
          onChange={handleInputChange}
        />
        <button onClick={handleAddMember}>Add Member</button>
      </div>
    </div>
  );
};

export default TeamEditor;
