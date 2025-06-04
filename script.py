import os

# Получаем текущую директорию, где находится скрипт
current_dir = os.path.dirname(os.path.abspath(__file__))

# Перебираем все файлы в этой директории
for filename in os.listdir(current_dir):
    # Проверяем, оканчивается ли файл на .PNG
    if filename.upper().endswith('.PNG'):
        # Формируем старое и новое имя
        old_path = os.path.join(current_dir, filename)
        new_filename = filename[:-4] + '.png'  # заменяем расширение на .png
        new_path = os.path.join(current_dir, new_filename)

        # Переименовываем файл
        os.rename(old_path, new_path)
        print(f"Переименован: {filename} → {new_filename}")

print("Готово!")