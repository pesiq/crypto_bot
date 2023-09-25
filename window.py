import customtkinter as tk


def switch_press():
    print("switch pressed")


def brridge_press():
    print("brdge pressed")


def generic_button(i):
    print(f"{i} button pressed")


class Window(tk.CTk):
    def __init__(self, title, size):
        super().__init__()

        # System settings
        self.title(title)
        self.geometry(size)
        tk.set_appearance_mode("dark")
        tk.set_default_color_theme("dark-blue")

        # grid

        self.columnconfigure(0, weight=1)
        self.columnconfigure(1, weight=9)

        self.rowconfigure(0, weight=1)

        # widgets
        self.settings = Settings(self)
        self.main = Main(self)

        # put widgets of grid
        self.settings.grid(column=0, row=0)
        self.main.grid(column=1, row=0)

        # run
        self.mainloop()


class Settings(tk.CTkFrame):
    def __init__(self, parent):
        super().__init__(parent)

        # add setting menu
        self.place(x=0, y=0, relwidth=0.1, relheight=1)
        self.create_widgets()

    def create_widgets(self):
        # add buttons
        settings_button_1 = tk.CTkButton(
            self, text="Button 1", command=lambda: generic_button(1)
        )
        settings_button_2 = tk.CTkButton(
            self, text="Button 2", command=lambda: generic_button(2)
        )
        settings_button_3 = tk.CTkButton(
            self, text="Button 3", command=lambda: generic_button(3)
        )

        # render buttons
        settings_button_1.pack(padx=5, pady=10)
        settings_button_2.pack(padx=5, pady=10)
        settings_button_3.pack(padx=5, pady=10)


class Main(tk.CTkFrame):
    def __init__(self, parent):
        super().__init__(parent)

        self.place(relx=0.1, y=0, relwidth=0.9, relheight=1)
        tk.CTkLabel(self, bg_color="blue")

        self.tabs = Tabs(self)
        self.tabs.pack(fill="both")


class Tabs(tk.CTkTabview):
    def __init__(self, parent):
        super().__init__(parent)

        self._segmented_button.configure()

        # add big switch on top
        font = tk.CTkFont(size=40)
        self._segmented_button.configure(font=font)

        self.columnconfigure((0, 1), weight=1)

        switch_tab = self.add("Switch")
        bridge_tab = self.add("Bridge")

        self.switch_tab_components = SwitchTab(switch_tab)
        self.bridge_tab_components = BridgeTab(bridge_tab)

        # switch_tab.pack()
        # bridge_tab.pack()


class SwitchTab(tk.CTkFrame):
    def __init__(self, parent):
        super().__init__(parent)

        switch_button = tk.CTkButton(parent, text="Button Switch", command=switch_press)
        switch_button.pack()


class BridgeTab(tk.CTkFrame):
    def __init__(self, parent):
        super().__init__(parent)

        bridge_button = tk.CTkButton(
            parent, text="Button Bridge", command=brridge_press
        )
        bridge_button.pack()


class LogWindow(tk.CTkFrame):
    def __init__(self, parent):
        super().__init__(parent)


if __name__ == "__main__":
    app = Window("Air Drop Bot", "1366x768")
