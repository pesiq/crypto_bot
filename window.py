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

        # widgets
        self.settings = Settings(self)
        self.main = Main(self)

        # run
        self.mainloop()


class Settings(tk.CTkFrame):
    def __init__(self, parent):
        super().__init__(parent)
        # tk.CTkLabel(self, bg_color="red").pack(expand=True, fill="both")
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

        # self.rowconfigure((0, 1, 2, 3, 4), weight=1, uniform="a")

        # render buttons
        settings_button_1.pack(padx=5, pady=10)
        settings_button_2.pack(padx=5, pady=10)
        settings_button_3.pack(padx=5, pady=10)


class Main(tk.CTkTabview):
    def __init__(self, parent):
        super().__init__(parent)

        self._segmented_button.configure()

        # tk.CTkLabel(self, bg_color="red").pack(expand=True, fill="both")
        self.place(relx=0.1, y=0, relwidth=0.9, relheight=1)

        # add big switch on top
        switch_tab = self.add("Switch")
        bridge_tab = self.add("Bridge")

        self.switch_tab_components = SwitchTab(switch_tab)
        self.bridge_tab_components = BridgeTab(bridge_tab)

        # switch_tab.pack()
        # bridge_tab.pack()


class SwitchTab(tk.CTkFrame):
    def __init__(self, parent):
        super().__init__(parent)

        # tk.CTkLabel(self, bg_color="red").pack(expand=True, fill="both")

        switch_button = tk.CTkButton(parent, text="Button Switch", command=switch_press)
        switch_button.pack()


class BridgeTab(tk.CTkFrame):
    def __init__(self, parent):
        super().__init__(parent)

        # tk.CTkLabel(self, bg_color="blue").pack(expand=True, fill="both")

        bridge_button = tk.CTkButton(
            parent, text="Button Bridge", command=brridge_press
        )
        bridge_button.pack()


class LogWindow(tk.CTkFrame):
    def __init__(self, parent):
        super().__init__(parent)


if __name__ == "__main__":
    app = Window("Air Drop Bot", "1366x768")
